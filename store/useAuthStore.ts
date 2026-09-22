'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { secureApi } from '@/config/apiClient';
import toast from 'react-hot-toast';
import { signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import { auth } from '@/config/firebaseConfig';

interface User {
  name: string;
  phone: string;
  email: string;
  role: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  user?: User;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;

  sendOTP: (phone: string, recaptchaVerifier: any) => Promise<ConfirmationResult>;
  verifyOTP: (confirmationResult: ConfirmationResult, otp: string) => Promise<void>;
}

// ✅ Persistent Zustand store
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (email, password): Promise<LoginResponse> => {
        set({ loading: true, error: null });
        try {
          const res = await secureApi.post<LoginResponse>(
            "/api/v1/auth/user/login-by-email",
            { email, password }
          );

          if (res.data.success) {
            set({
              user: res.data.user!,
              isAuthenticated: true,
              loading: false,
            });
            toast.success(`Logged in successfully! ${res.data.user?.name}`);
          } else {
            set({ error: res.data.message || "Login failed", loading: false });
            toast.error(res.data.message || "Login failed");
          }

          return res.data;
        } catch (err: any) {
          const message = err.response?.data?.message || "Something went wrong";
          set({ error: message, loading: false });
          toast.error(message);
          throw new Error(message);
        }
      },

      logout: async () => {
        try {
          await secureApi.post("/api/v1/auth/logout", {});
          toast.success("Logged out successfully!");
        } catch (err) {
          console.error("Logout failed", err);
          toast.error("Logout failed");
        } finally {
          set({ user: null, isAuthenticated: false });
        }
      },

      fetchUser: async () => {
        set({ loading: true });
        try {
          const res = await secureApi.get("/api/v1/auth/session");

          if (res.data.success) {
            set({
              user: res.data.user,
              isAuthenticated: true,
              loading: false,
            });
          } else {
            set({ isAuthenticated: false, loading: false });
          }
        } catch {
          set({ isAuthenticated: false, loading: false });
        }
      },

      sendOTP: async (phone, recaptchaVerifier) => {
        try {
          const formattedPhone = `+91${phone}`;
          const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier);
          toast.success("OTP sent successfully!");
          return confirmationResult;
        } catch (error: any) {
          console.error("Error sending OTP:", error);
          toast.error(error.message || "Failed to send OTP. Try again.");
          throw error;
        }
      },

      verifyOTP: async (confirmationResult, otp) => {
        try {
          const userCredential = await confirmationResult.confirm(otp);
          const user = userCredential.user;
          const idToken = await user.getIdToken(true);

          const validateRes = await secureApi.post(
            "/api/v1/auth/user/login-by-phone",
            { phone: user?.phoneNumber },
            {
              headers: {
                Authorization: `Bearer ${idToken}`,
              },
            }
          );

          const { success, message, user: userData } = validateRes.data;
          if (!success) {
            toast.error(message || "User not found");
            throw new Error(message || "User not found");
          }

          set({
            user: {
              name: userData.name,
              phone: userData.phoneNumber,
              email: userData.email,
              role: userData.role,
            },
            isAuthenticated: true,
          });

          toast.success("OTP verified successfully!");
        } catch (error: any) {
          console.error("OTP verification failed:", error);
          toast.error(error.message || "Invalid OTP. Please try again.");
          throw error;
        }
      },
    }),
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
