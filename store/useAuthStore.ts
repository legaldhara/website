"use client";

import { create } from "zustand";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  reload,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/config/firebaseConfig";
import { secureApi } from "@/config/apiClient";
import { customerAuthApi, SignupProfile } from "@/config/customerAuthApi";
import { setCustomerSessionHint } from "@/lib/customerSessionHint";

export interface SessionUser {
  name: string;
  phone: string;
  email: string;
  role: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  user?: SessionUser;
}

interface AuthState {
  user: SessionUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  signupChallengeId: string | null;
  loginChallengeId: string | null;
  loginPhone: string | null;
  retryAfterSeconds: number;
  onboardingInProgress: boolean;
  signupWithEmail: (email: string, password: string) => Promise<void>;
  signupWithGoogle: () => Promise<{ email: string }>;
  refreshEmailVerification: () => Promise<boolean>;
  requestSignupOtp: (phone: string) => Promise<number>;
  verifySignupOtp: (code: string) => Promise<void>;
  completeSignup: (profile: SignupProfile) => Promise<void>;
  requestLoginOtp: (phone: string) => Promise<number>;
  loginWithPhoneOtp: (code: string) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<LoginResponse>;
  login: (email: string, password: string) => Promise<LoginResponse>;
  sendPasswordReset: (email: string) => Promise<string>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
}

const loadSession = async (): Promise<SessionUser> => {
  const response = await secureApi.get("/api/v1/auth/session");
  return response.data.user;
};

const firebaseErrorCode = (error: unknown): string =>
  typeof error === "object" && error && "code" in error ? String(error.code) : "";

const signupErrorMessage = (error: unknown): string => {
  const code = firebaseErrorCode(error);
  if (code === "auth/email-already-in-use") return "An account already exists for this email. Sign in instead.";
  if (code === "auth/weak-password") return "Use a stronger password with at least eight characters.";
  if (code === "auth/operation-not-allowed") return "This sign-up method is not enabled yet.";
  if (code === "auth/popup-closed-by-user") return "Google sign-up was cancelled.";
  if (code === "auth/popup-blocked") return "Allow pop-ups, then try Google sign-up again.";
  return "Unable to create account. Please try again.";
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
  signupChallengeId: null,
  loginChallengeId: null,
  loginPhone: null,
  retryAfterSeconds: 0,
  onboardingInProgress: false,

  signupWithEmail: async (email, password) => {
    set({ loading: true, error: null, onboardingInProgress: true });
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(credential.user);
      set({ loading: false });
    } catch (error) {
      if (firebaseErrorCode(error) === "auth/email-already-in-use") {
        try {
          const credential = await signInWithEmailAndPassword(auth, email, password);
          if (!credential.user.emailVerified) await sendEmailVerification(credential.user);
          set({ loading: false });
          return;
        } catch {}
      }
      const message = signupErrorMessage(error);
      set({ loading: false, error: message, onboardingInProgress: false });
      throw new Error(message);
    }
  },

  signupWithGoogle: async () => {
    set({ loading: true, error: null, onboardingInProgress: true });
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const credential = await signInWithPopup(auth, provider);
      if (!credential.user.email || !credential.user.emailVerified) {
        throw new Error("Google did not provide a verified email address.");
      }
      set({ loading: false });
      return { email: credential.user.email };
    } catch (error) {
      const message = error instanceof Error && error.message === "Google did not provide a verified email address."
        ? error.message
        : signupErrorMessage(error);
      set({ loading: false, error: message, onboardingInProgress: false });
      throw new Error(message);
    }
  },

  refreshEmailVerification: async () => {
    const user = auth.currentUser;
    if (!user) return false;
    await reload(user);
    if (user.emailVerified) {
      await user.getIdToken(true);
      return true;
    }
    return false;
  },

  requestSignupOtp: async (phone) => {
    set({ loading: true, error: null });
    try {
      const result = await customerAuthApi.requestSignupOtp(phone);
      set({
        signupChallengeId: result.challengeId,
        retryAfterSeconds: result.retryAfterSeconds,
        loading: false,
      });
      return result.retryAfterSeconds;
    } catch {
      const message = "Unable to send verification code. Please try again.";
      set({ loading: false, error: message });
      throw new Error(message);
    }
  },

  verifySignupOtp: async (code) => {
    const challengeId = get().signupChallengeId;
    if (!challengeId) throw new Error("Request a verification code first.");
    set({ loading: true, error: null });
    try {
      await customerAuthApi.verifySignupOtp(challengeId, code);
      set({ loading: false });
    } catch {
      const message = "Verification code is invalid or expired.";
      set({ loading: false, error: message });
      throw new Error(message);
    }
  },

  completeSignup: async (profile) => {
    const challengeId = get().signupChallengeId;
    if (!challengeId) throw new Error("Verify your phone first.");
    set({ loading: true, error: null });
    try {
      await customerAuthApi.completeSignup({ ...profile, challengeId });
      set({ signupChallengeId: null, loading: false, onboardingInProgress: false });
    } catch {
      const message = "Unable to complete signup. Please try again.";
      set({ loading: false, error: message });
      throw new Error(message);
    }
  },

  requestLoginOtp: async (phone) => {
    set({ loading: true, error: null });
    try {
      const result = await customerAuthApi.requestLoginOtp(phone);
      set({
        loginChallengeId: result.challengeId,
        loginPhone: phone,
        retryAfterSeconds: result.retryAfterSeconds,
        loading: false,
      });
      return result.retryAfterSeconds;
    } catch {
      const message = "Unable to send verification code. Please try again.";
      set({ loading: false, error: message });
      throw new Error(message);
    }
  },

  loginWithPhoneOtp: async (code) => {
    const { loginChallengeId, loginPhone } = get();
    if (!loginChallengeId || !loginPhone) throw new Error("Request a verification code first.");
    set({ loading: true, error: null });
    try {
      const result = await customerAuthApi.verifyLoginOtp(loginPhone, loginChallengeId, code);
      await signInWithCustomToken(auth, result.customToken);
      const user = await loadSession();
      set({
        user,
        isAuthenticated: true,
        loginChallengeId: null,
        loginPhone: null,
        loading: false,
      });
      setCustomerSessionHint(true);
    } catch {
      const message = "Verification code is invalid or expired.";
      set({ loading: false, error: message });
      throw new Error(message);
    }
  },

  loginWithEmail: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      if (!credential.user.emailVerified) {
        await signOut(auth);
        const message = "Verify your email before signing in.";
        set({ loading: false, error: message });
        throw new Error(message);
      }
      const user = await loadSession();
      set({ user, isAuthenticated: true, loading: false });
      setCustomerSessionHint(true);
      return { success: true, message: "Logged in", user };
    } catch (error) {
      if (error instanceof Error && error.message === "Verify your email before signing in.") throw error;
      const message = "Unable to sign in with those details.";
      set({ loading: false, error: message });
      throw new Error(message);
    }
  },

  login: async (email, password) => get().loginWithEmail(email, password),

  sendPasswordReset: async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch {}
    return "If an account exists, a reset email has been sent.";
  },

  logout: async () => {
    await signOut(auth);
    setCustomerSessionHint(false);
    set({
      user: null,
      isAuthenticated: false,
      signupChallengeId: null,
      loginChallengeId: null,
      loginPhone: null,
      loading: false,
      error: null,
      onboardingInProgress: false,
    });
  },

  fetchUser: async () => {
    if (get().onboardingInProgress) {
      set({ loading: false });
      return;
    }
    if (!auth.currentUser) {
      setCustomerSessionHint(false);
      set({ user: null, isAuthenticated: false, loading: false });
      return;
    }
    try {
      const user = await loadSession();
      set({ user, isAuthenticated: true, loading: false });
      setCustomerSessionHint(true);
    } catch {
      await signOut(auth);
      setCustomerSessionHint(false);
      set({ user: null, isAuthenticated: false, loading: false });
    }
  },
}));

if (typeof window !== "undefined") {
  onAuthStateChanged(auth, () => {
    void useAuthStore.getState().fetchUser();
  });
}
