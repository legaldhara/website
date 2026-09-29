import { secureApi } from "./apiClient";

export interface OtpRequestResult {
  challengeId: string;
  retryAfterSeconds: number;
  message: string;
}

export interface SignupProfile {
  fullName: string;
  termsAccepted: true;
  dob?: string;
  gender?: string;
  city?: string;
}

export const customerAuthApi = {
  async requestSignupOtp(phone: string): Promise<OtpRequestResult> {
    const response = await secureApi.post("/api/v1/auth/signup/phone/request", { phone });
    return response.data;
  },

  async verifySignupOtp(challengeId: string, code: string): Promise<void> {
    await secureApi.post("/api/v1/auth/signup/phone/verify", { challengeId, code });
  },

  async completeSignup(input: SignupProfile & { challengeId: string }): Promise<void> {
    await secureApi.post("/api/v1/auth/signup/complete", input);
  },

  async requestLoginOtp(phone: string): Promise<OtpRequestResult> {
    const response = await secureApi.post("/api/v1/auth/otp/login/request", { phone });
    return response.data;
  },

  async verifyLoginOtp(phone: string, challengeId: string, code: string): Promise<{ customToken: string }> {
    const response = await secureApi.post("/api/v1/auth/otp/login/verify", { phone, challengeId, code });
    return response.data;
  },
};
