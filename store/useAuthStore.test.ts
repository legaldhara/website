import { beforeEach, describe, expect, it, vi } from "vitest";

const { mocks, currentUser } = vi.hoisted(() => {
  const reload = vi.fn();
  return {
    mocks: {
      createUser: vi.fn(),
      signInPopup: vi.fn(),
      setGoogleParameters: vi.fn(),
      sendEmailVerification: vi.fn(),
      signInEmail: vi.fn(),
      signInCustomToken: vi.fn(),
      sendPasswordReset: vi.fn(),
      signOut: vi.fn(),
      reload,
      requestSignupOtp: vi.fn(),
      verifySignupOtp: vi.fn(),
      completeSignup: vi.fn(),
      requestLoginOtp: vi.fn(),
      verifyLoginOtp: vi.fn(),
      getSession: vi.fn(),
      authObserver: undefined as undefined | ((user: unknown) => void),
    },
    currentUser: {
      emailVerified: false,
      reload,
      getIdToken: vi.fn(),
    },
  };
});

vi.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: mocks.createUser,
  GoogleAuthProvider: class {
    setCustomParameters = mocks.setGoogleParameters;
  },
  sendEmailVerification: mocks.sendEmailVerification,
  signInWithEmailAndPassword: mocks.signInEmail,
  signInWithCustomToken: mocks.signInCustomToken,
  sendPasswordResetEmail: mocks.sendPasswordReset,
  signOut: mocks.signOut,
  onAuthStateChanged: vi.fn((_auth, callback) => {
    mocks.authObserver = callback;
    return vi.fn();
  }),
  reload: mocks.reload,
  signInWithPopup: mocks.signInPopup,
}));
vi.mock("@/config/firebaseConfig", () => ({ auth: { currentUser } }));
vi.mock("@/config/customerAuthApi", () => ({
  customerAuthApi: {
    requestSignupOtp: mocks.requestSignupOtp,
    verifySignupOtp: mocks.verifySignupOtp,
    completeSignup: mocks.completeSignup,
    requestLoginOtp: mocks.requestLoginOtp,
    verifyLoginOtp: mocks.verifyLoginOtp,
  },
}));
vi.mock("@/config/apiClient", () => ({ secureApi: { get: mocks.getSession } }));

import { useAuthStore } from "./useAuthStore";
import { hasCustomerSessionHint } from "@/lib/customerSessionHint";

describe("customer auth store", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    currentUser.emailVerified = false;
    currentUser.getIdToken.mockResolvedValue("refreshed-token");
    mocks.getSession.mockResolvedValue({ data: { user: { name: "User", email: "user@example.com", phone: "+919876543210", role: "USER" } } });
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      signupChallengeId: null,
      loginChallengeId: null,
      loginPhone: null,
      retryAfterSeconds: 0,
      onboardingInProgress: false,
    });
  });

  it("creates a Firebase account and sends email verification", async () => {
    const firebaseUser = { emailVerified: false };
    mocks.createUser.mockResolvedValue({ user: firebaseUser });

    await useAuthStore.getState().signupWithEmail("new@example.com", "strong-password");

    expect(mocks.createUser).toHaveBeenCalledWith(expect.anything(), "new@example.com", "strong-password");
    expect(mocks.sendEmailVerification).toHaveBeenCalledWith(firebaseUser);
    expect(useAuthStore.getState().onboardingInProgress).toBe(true);
  });

  it("starts Google onboarding with account selection", async () => {
    mocks.signInPopup.mockResolvedValue({ user: { email: "google@example.com", emailVerified: true } });

    await expect(useAuthStore.getState().signupWithGoogle()).resolves.toEqual({ email: "google@example.com" });

    expect(mocks.setGoogleParameters).toHaveBeenCalledWith({ prompt: "select_account" });
    expect(useAuthStore.getState().onboardingInProgress).toBe(true);
  });

  it("does not destroy the Firebase session while signup is incomplete", async () => {
    mocks.createUser.mockResolvedValue({ user: currentUser });
    await useAuthStore.getState().signupWithEmail("new@example.com", "strong-password");

    mocks.authObserver?.(currentUser);

    expect(mocks.getSession).not.toHaveBeenCalled();
    expect(mocks.signOut).not.toHaveBeenCalled();
  });

  it("shows a specific message when the email already exists", async () => {
    mocks.createUser.mockRejectedValue({ code: "auth/email-already-in-use" });
    mocks.signInEmail.mockRejectedValue({ code: "auth/wrong-password" });

    await expect(useAuthStore.getState().signupWithEmail("existing@example.com", "strong-password"))
      .rejects.toThrow("An account already exists for this email. Sign in instead.");
    expect(useAuthStore.getState().error).toBe("An account already exists for this email. Sign in instead.");
  });

  it("resumes an incomplete Firebase signup when the email and password match", async () => {
    const firebaseUser = { emailVerified: false };
    mocks.createUser.mockRejectedValue({ code: "auth/email-already-in-use" });
    mocks.signInEmail.mockResolvedValue({ user: firebaseUser });

    await expect(useAuthStore.getState().signupWithEmail("existing@example.com", "strong-password"))
      .resolves.toBeUndefined();

    expect(mocks.signInEmail).toHaveBeenCalledWith(expect.anything(), "existing@example.com", "strong-password");
    expect(mocks.sendEmailVerification).toHaveBeenCalledWith(firebaseUser);
    expect(useAuthStore.getState().onboardingInProgress).toBe(true);
  });

  it("reloads Firebase and refreshes the token after email verification", async () => {
    mocks.reload.mockImplementation(async () => { currentUser.emailVerified = true; });
    await expect(useAuthStore.getState().refreshEmailVerification()).resolves.toBe(true);
    expect(currentUser.getIdToken).toHaveBeenCalledWith(true);
  });

  it("carries the signup challenge through verify and completion", async () => {
    mocks.requestSignupOtp.mockResolvedValue({ challengeId: "signup-challenge", retryAfterSeconds: 60 });
    await useAuthStore.getState().requestSignupOtp("9876543210");
    await useAuthStore.getState().verifySignupOtp("123456");
    await useAuthStore.getState().completeSignup({ fullName: "New User", termsAccepted: true, city: "Delhi" });

    expect(mocks.verifySignupOtp).toHaveBeenCalledWith("signup-challenge", "123456");
    expect(mocks.completeSignup).toHaveBeenCalledWith(expect.objectContaining({ challengeId: "signup-challenge", fullName: "New User" }));
  });

  it("exchanges a verified phone OTP for a Firebase custom token", async () => {
    mocks.requestLoginOtp.mockResolvedValue({ challengeId: "login-challenge", retryAfterSeconds: 60 });
    mocks.verifyLoginOtp.mockResolvedValue({ customToken: "firebase-custom-token" });

    await useAuthStore.getState().requestLoginOtp("9876543210");
    await useAuthStore.getState().loginWithPhoneOtp("123456");

    expect(mocks.verifyLoginOtp).toHaveBeenCalledWith("9876543210", "login-challenge", "123456");
    expect(mocks.signInCustomToken).toHaveBeenCalledWith(expect.anything(), "firebase-custom-token");
    expect(useAuthStore.getState().isAuthenticated).toBe(true);
    expect(hasCustomerSessionHint()).toBe(true);
  });

  it("requires verified email before creating an API session", async () => {
    mocks.signInEmail.mockResolvedValue({ user: { emailVerified: false } });
    await expect(useAuthStore.getState().loginWithEmail("user@example.com", "password"))
      .rejects.toThrow("Verify your email before signing in.");
    expect(mocks.getSession).not.toHaveBeenCalled();
  });

  it("keeps password reset responses generic and stores no passwords or OTPs", async () => {
    mocks.sendPasswordReset.mockRejectedValue(new Error("auth/user-not-found"));
    await expect(useAuthStore.getState().sendPasswordReset("missing@example.com"))
      .resolves.toBe("If an account exists, a reset email has been sent.");

    const state = JSON.stringify(useAuthStore.getState());
    expect(state).not.toContain("strong-password");
    expect(state).not.toContain("123456");
  });

  it("clears the session hint on logout", async () => {
    localStorage.setItem("legaldhara.customer-session", "1");
    await useAuthStore.getState().logout();
    expect(hasCustomerSessionHint()).toBe(false);
  });
});

