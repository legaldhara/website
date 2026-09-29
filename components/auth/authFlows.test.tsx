import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { authState, router } = vi.hoisted(() => ({
  router: { replace: vi.fn(), push: vi.fn() },
  authState: {
    isAuthenticated: false,
    loading: false,
    error: null as string | null,
    retryAfterSeconds: 60,
    loginWithEmail: vi.fn(),
    requestLoginOtp: vi.fn(),
    loginWithPhoneOtp: vi.fn(),
    sendPasswordReset: vi.fn(),
    signupWithEmail: vi.fn(),
    signupWithGoogle: vi.fn(),
    refreshEmailVerification: vi.fn(),
    requestSignupOtp: vi.fn(),
    verifySignupOtp: vi.fn(),
    completeSignup: vi.fn(),
    fetchUser: vi.fn(),
  },
}));

vi.mock("next/navigation", () => ({ useRouter: () => router }));
vi.mock("@/store/useAuthStore", () => ({ useAuthStore: () => authState }));
vi.mock("react-hot-toast", () => ({ default: { success: vi.fn(), error: vi.fn() } }));

import LoginPage from "@/app/login/page";
import SignupPage from "@/app/signup/page";
import { OtpInput } from "./OtpInput";

describe("customer auth UI", () => {
  afterEach(cleanup);
  beforeEach(() => {
    vi.clearAllMocks();
    authState.isAuthenticated = false;
    authState.loading = false;
    authState.error = null;
    authState.retryAfterSeconds = 60;
    authState.refreshEmailVerification.mockResolvedValue(true);
  });

  it("filters OTP input to six digits", () => {
    const onChange = vi.fn();
    render(<OtpInput value="" onChange={onChange} label="Verification code" />);
    fireEvent.change(screen.getByLabelText("Verification code"), { target: { value: "12a34-5678" } });
    expect(onChange).toHaveBeenCalledWith("123456");
  });

  it("switches login modes and disables resend during countdown", async () => {
    render(<LoginPage />);
    fireEvent.click(screen.getByRole("tab", { name: "Phone OTP" }));
    fireEvent.change(screen.getByLabelText("Mobile number"), { target: { value: "9876543210" } });
    fireEvent.click(screen.getByRole("button", { name: "Send verification code" }));

    await waitFor(() => expect(authState.requestLoginOtp).toHaveBeenCalledWith("9876543210"));
    expect(screen.getByRole("button", { name: /Resend in 60s/ })).toBeDisabled();
    expect(screen.getByLabelText("Verification code")).toBeInTheDocument();
  });

  it("submits phone OTP and redirects after authentication", async () => {
    const view = render(<LoginPage />);
    fireEvent.click(screen.getByRole("tab", { name: "Phone OTP" }));
    fireEvent.change(screen.getByLabelText("Mobile number"), { target: { value: "9876543210" } });
    fireEvent.click(screen.getByRole("button", { name: "Send verification code" }));
    await screen.findByLabelText("Verification code");
    fireEvent.change(screen.getByLabelText("Verification code"), { target: { value: "123456" } });
    fireEvent.click(screen.getByRole("button", { name: "Verify and sign in" }));
    await waitFor(() => expect(authState.loginWithPhoneOtp).toHaveBeenCalledWith("123456"));

    authState.isAuthenticated = true;
    view.rerender(<LoginPage />);
    expect(router.replace).toHaveBeenCalledWith("/dashboard");
  });

  it("progresses signup through email, phone, and profile completion", async () => {
    render(<SignupPage />);
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "new@example.com" } });
    fireEvent.change(screen.getByLabelText("Create password"), { target: { value: "strong-password" } });
    fireEvent.click(screen.getByRole("button", { name: "Create account" }));
    await screen.findByRole("button", { name: "I verified my email" });

    fireEvent.click(screen.getByRole("button", { name: "I verified my email" }));
    await screen.findByLabelText("Mobile number");
    fireEvent.change(screen.getByLabelText("Mobile number"), { target: { value: "9876543210" } });
    fireEvent.click(screen.getByRole("button", { name: "Send verification code" }));
    await screen.findByLabelText("Verification code");
    fireEvent.change(screen.getByLabelText("Verification code"), { target: { value: "123456" } });
    fireEvent.click(screen.getByRole("button", { name: "Verify phone" }));

    await screen.findByLabelText("Full name");
    fireEvent.change(screen.getByLabelText("Full name"), { target: { value: "New User" } });
    fireEvent.click(screen.getByLabelText("I accept the terms and privacy policy"));
    fireEvent.click(screen.getByRole("button", { name: "Finish signup" }));

    await waitFor(() => expect(authState.completeSignup).toHaveBeenCalledWith(expect.objectContaining({ fullName: "New User", termsAccepted: true })));
    expect(authState.fetchUser).toHaveBeenCalled();
    expect(router.replace).toHaveBeenCalledWith("/dashboard");
  });

  it("starts verified phone onboarding from the Google signup button", async () => {
    authState.signupWithGoogle.mockResolvedValue({ email: "google@example.com" });
    render(<SignupPage />);

    expect(screen.getByRole("img", { name: "Google" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Continue with Google" }));

    await waitFor(() => expect(authState.signupWithGoogle).toHaveBeenCalled());
    expect(await screen.findByLabelText("Mobile number")).toBeInTheDocument();
    expect(screen.getByText(/E\.164 format/)).toBeInTheDocument();
  });

  it("shows and hides passwords on signup and login", () => {
    const signup = render(<SignupPage />);
    const signupPassword = screen.getByLabelText("Create password");
    expect(signupPassword).toHaveAttribute("type", "password");
    fireEvent.click(screen.getByRole("button", { name: "Show password" }));
    expect(signupPassword).toHaveAttribute("type", "text");
    signup.unmount();

    render(<LoginPage />);
    const loginPassword = screen.getByLabelText("Password");
    expect(loginPassword).toHaveAttribute("type", "password");
    fireEvent.click(screen.getByRole("button", { name: "Show password" }));
    expect(loginPassword).toHaveAttribute("type", "text");
  });

  it("shows generic store errors in an accessible live region", () => {
    authState.error = "Unable to sign in with those details.";
    render(<LoginPage />);
    expect(screen.getByRole("status")).toHaveTextContent("Unable to sign in with those details.");
  });
});

