'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Shield, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { RecaptchaVerifier , ConfirmationResult } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import Image from 'next/image';
import { headers } from 'next/headers';
import toast from 'react-hot-toast';
import { useAuthStore } from '@/store/useAuthStore';
import Loader from '@/components/Loader';
import { secureApi } from '@/config/apiClient';

type AuthMode = 'login-otp' | 'login-password' | 'signup' | 'reset-password';

declare global{
  interface Window{
    recaptchaVerifier : RecaptchaVerifier;
  }
}

export default function AuthPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<AuthMode>('login-password');
  const [step, setStep] = useState(1); // For OTP: 1: phone, 2: otp
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  // Login OTP States
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  // Login Password States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup States
  const [signupFullName, setSignupFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRetypePassword, setSignupRetypePassword] = useState('');
  
  // Reset Password States
  const [resetPhone, setResetPhone] = useState('');
  const [resetNewPassword, setResetNewPassword] = useState('');
  const [resetRetypePassword, setResetRetypePassword] = useState('');

  const { login , sendOTP , verifyOTP , isAuthenticated} = useAuthStore();

 useEffect(() => {
  const setupRecaptcha = async () => {
    try {
      if (typeof window === "undefined") return; // safety for SSR

      // Avoid re-initializing if already exists
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
          callback: (response: any) => {
            console.log("reCAPTCHA solved", response);
          },
          "expired-callback": () => {
            console.log("reCAPTCHA expired");
          },
        });

        await window.recaptchaVerifier.render();
        console.log("reCAPTCHA rendered");
      }
    } catch (err) {
      console.error("reCAPTCHA setup error:", err);
    }
  };
  setupRecaptcha();
  return () => {
    // ✅ Wrap cleanup safely
    try {
      if (
        window.recaptchaVerifier &&
        typeof window.recaptchaVerifier.clear === "function"
      ) {
        window.recaptchaVerifier.clear();
        console.log("reCAPTCHA cleared successfully");
      } else {
        console.log("reCAPTCHA not initialized or already cleared");
      }
    } catch (err) {
      console.warn("reCAPTCHA cleanup skipped:", err);
    }
  };
}, []);

 useEffect(()=>{
  console.log(isAuthenticated , "::::")
  if(isAuthenticated){
    console.log(isAuthenticated)
    router.replace('/dashboard');
  }
 },[]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

 const handleSendOTP = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate phone number
  if (!phone || phone.length !== 10) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  // Ensure reCAPTCHA verifier is ready
  if (!window.recaptchaVerifier) {
    console.error("RecaptchaVerifier not initialized!");
    alert("Security check failed. Please refresh the page and try again.");
    return;
  }

  setIsLoading(true);

  try {
    const fullPhone = `+91${phone}`;
    
    // 1️⃣ Validate user existence before sending OTP
    const res = await secureApi.post(`/api/v1/auth/validate`, {
      phone: fullPhone,
    });
    console.log("res",res)

    if (!res.data.success) {
      toast.error("User does not exist. Please sign up first.");
      // Optionally redirect:
      setIsLoading(false);
      switchMode('signup');
      return;
    }
    
    const confirmation = await sendOTP(fullPhone, window.recaptchaVerifier);

    setConfirmationResult(confirmation);

    setStep(2);
    setTimer(30);

    toast.success("OTP sent successfully!");
  } catch (error: any) {
    console.error("Error sending OTP:", error);

    if (error.message?.includes("TOO_MANY_ATTEMPTS_TRY_LATER")) {
      alert("Too many OTP requests. Please try again later.");
    } else if (error.message?.includes("network")) {
      alert("Network error. Please check your internet connection.");
    } else {
      // toast.error("Please sign up first.");
      // switchMode('signup');
    }
  } finally {
    setIsLoading(false);
  }
};

  const handleVerifyOTP = async (e: React.FormEvent) => {
  e.preventDefault();

  if (otp.length !== 6) {
    alert('Please enter a valid 6-digit OTP');
    return;
  }

  if (!confirmationResult) {
    alert('Session expired. Please resend OTP.');
    return;
  }

  setIsLoading(true);
  try {
    const res =  await verifyOTP(confirmationResult, otp); // ✅ calls Firebase confirm
    
    
    router.push('/dashboard'); // Redirect on success
  } catch (error) {
    console.error('OTP verification failed:', error);
    alert('Invalid OTP. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

  const handlePasswordLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const res = await login(loginEmail, loginPassword);
    // toast.success(" Login Successfully ");
    // console.log("✅ Login Response:", res);

    if (res?.success) {
      router.push("/dashboard");
    } else {
      console.log("Response log",res);
      // toast.error(res?.message || "Login failed. Please try again.");
      // alert(res?.message || "Login failed. Please try again.");
    }
  } catch (error: any) {
    console.error("❌ Login Error:", error);
    // toast.error("Something went wrong. Please try again.")
    // alert(error.message || "Something went wrong. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  const validatePassword = (password: string): { isValid: boolean; message: string } => {
    if (password.length < 8) {
      return { isValid: false, message: "Password must be at least 8 characters long" };
    }
    
    if (!/[A-Z]/.test(password)) {
      return { isValid: false, message: "Password must contain at least one uppercase letter" };
    }
    
    if (!/[a-z]/.test(password)) {
      return { isValid: false, message: "Password must contain at least one lowercase letter" };
    }
    
    if (!/[0-9]/.test(password)) {
      return { isValid: false, message: "Password must contain at least one number" };
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return { isValid: false, message: "Password must contain at least one special character" };
    }
    
    return { isValid: true, message: "" };
  };

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Basic validations
  if (signupPassword !== signupRetypePassword) {
    toast.error("Passwords do not match!");
    return;
  }

  const passwordValidation = validatePassword(signupPassword);
  if (!passwordValidation.isValid) {
    toast.error(passwordValidation.message);
    return;
  }

  setIsLoading(true);

  try {
    const response = await secureApi.post(
      `/api/v1/auth/user/register`,
      {
        fullName: signupFullName,
        email: signupEmail.trim(),
        phone: signupPhone,
        password: signupPassword,
        confirmPassword: signupRetypePassword,
       
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // ✅ handles cookies automatically
      }
    );

    const data = response.data;
    console.log("✅ Signup Response:", data);

    if (data?.success) {
      toast.success("Account created successfully! Please login. ");
      setAuthMode("login-password"); // Switch to login form
    } else {
      toast.error(data?.message || "Signup failed. Please try again.")
    }
  } catch (error: any) {
    console.error("❌ Signup Error:", error);

    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong. Please try again.";
    alert(message);
  } finally {
    setIsLoading(false);
  }
};

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (!resetPhone || resetPhone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // Validate passwords
    if (resetNewPassword !== resetRetypePassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const passwordValidation = validatePassword(resetNewPassword);
    if (!passwordValidation.isValid) {
      toast.error(passwordValidation.message);
      return;
    }

    setIsLoading(true);

    try {
      const response = await secureApi.post(
        `/api/v1/auth/user/update-password`,
        {
          phone: resetPhone,
          newPassword: resetNewPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const data = response.data;
      console.log("✅ Reset Password Response:", data);

      if (data?.success) {
        toast.success("Password reset successfully! Please login with your new password.");
        setAuthMode("login-password");
        resetForm();
      } else {
        toast.error(data?.message || "Password reset failed. Please try again.");
      }
    } catch (error: any) {
      console.error("❌ Reset Password Error:", error);

      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setTimer(30);
    // API call to resend OTP
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetForm = () => {
    setStep(1);
    setPhone('');
    setOtp('');
    setLoginEmail('');
    setLoginPassword('');
    setSignupFullName('');
    setSignupEmail('');
    setSignupPhone('');
    setSignupPassword('');
    setSignupRetypePassword('');
    setResetPhone('');
    setResetNewPassword('');
    setResetRetypePassword('');
    setTimer(0);
  };

  const switchMode = (mode: AuthMode) => {
    setAuthMode(mode);
    resetForm();
  };

  return (
    <>
    <Loader loading={isLoading} />
    <div 
      className=" relative overflow-hidden ">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-20 px-4 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
          </div>
          {authMode !== 'signup' && authMode !== 'reset-password' && (
            <div className="text-sm md:text-base text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => switchMode('signup')}
                className="text-brand-orange hover:underline font-semibold"
              >
                Sign Up
              </button>
            </div>
          )}
          {authMode === 'signup' && (
            <div className="text-sm md:text-base text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => switchMode('login-password')}
                className="text-brand-orange hover:underline font-semibold"
              >
                Log In
              </button>
            </div>
          )}
          {authMode === 'reset-password' && (
            <div className="text-sm md:text-base text-gray-600">
              Remember your password?{' '}
              <button
                onClick={() => switchMode('login-password')}
                className="text-brand-orange hover:underline font-semibold"
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center  px-4 py-20 md:py-24">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-gray-200 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-[#071B34]">
                {authMode === 'signup' && 'Create your account'}
                {authMode === 'login-otp' && (step === 1 ? 'Log into your account' : 'Verify OTP')}
                {authMode === 'login-password' && 'Log into your account'}
                {authMode === 'reset-password' && 'Reset your password'}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 md:px-8 ">
              {/* Login with Password */}
              {authMode === 'login-password' && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Input
                      id="loginEmail"
                      type="email"
                      placeholder="Email address"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        id="loginPassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:underline"
                      onClick={() => switchMode('reset-password')}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    onClick={handlePasswordLogin}
                    className="w-full h-12 bg-[#071B34] text-white hover:bg-[#0a2545] font-semibold text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Log In'}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => switchMode('login-otp')}
                      className="text-sm text-blue-600 hover:underline font-medium"
                    >
                      Login with OTP
                    </button>
                  </div>
                </div>
              )}

              {/* Login with OTP */}
              {authMode === 'login-otp' && step === 1 && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] pl-14"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleSendOTP}
                    className="w-full h-12 bg-[#071B34] text-white hover:bg-[#0a2545] font-semibold text-base"
                    disabled={isLoading || phone.length !== 10}
                  >
                    {isLoading ? 'Sending OTP...' : 'Send OTP'}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => switchMode('login-password')}
                      className="text-sm text-blue-600 hover:underline font-medium"
                    >
                      Login with Password
                    </button>
                  </div>
                </div>
              )}

              {authMode === 'login-otp' && step === 2 && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] text-center text-lg tracking-widest"
                      required
                    />
                  </div>

                  <div className="text-center">
                    {timer > 0 ? (
                      <p className="text-sm text-gray-600">
                        Resend OTP in {formatTime(timer)}
                      </p>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        className="text-sm text-blue-600 hover:underline font-medium"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>

                  <Button
                    onClick={handleVerifyOTP}
                    className="w-full h-12 bg-[#071B34] text-white hover:bg-[#0a2545] font-semibold text-base"
                    disabled={isLoading || otp.length !== 6}
                  >
                    {isLoading ? 'Verifying...' : 'Verify & Login'}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 border-[#071B34] text-[#071B34] hover:bg-gray-50"
                    onClick={() => { setStep(1); setOtp(''); setTimer(0); }}
                  >
                    Change Mobile Number
                  </Button>
                </div>
              )}

              {/* Signup Form */}
              {authMode === 'signup' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      id="signupFullName"
                      type="text"
                      placeholder="Full Name"
                      value={signupFullName}
                      onChange={(e) => setSignupFullName(e.target.value)}
                      className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Input
                      id="signupEmail"
                      type="email"
                      placeholder="Email address"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</div>
                      <Input
                        id="signupPhone"
                        type="tel"
                        placeholder="Mobile number"
                        value={signupPhone}
                        onChange={(e) => setSignupPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] pl-14"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        id="signupPassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 px-1">
                      Must be 8+ characters with uppercase, lowercase, number & special character
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        id="signupRetypePassword"
                        type={showRetypePassword ? 'text' : 'password'}
                        placeholder="Retype Password"
                        value={signupRetypePassword}
                        onChange={(e) => setSignupRetypePassword(e.target.value)}
                        className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowRetypePassword(!showRetypePassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showRetypePassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handleSignup}
                    className="w-full h-12 bg-[#071B34] text-white hover:bg-[#0a2545] font-semibold text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Sign Up'}
                  </Button>
                </div>
              )}

              {/* Reset Password Form */}
              {authMode === 'reset-password' && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</div>
                      <Input
                        id="resetPhone"
                        type="tel"
                        placeholder="Mobile number"
                        value={resetPhone}
                        onChange={(e) => setResetPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] pl-14"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        id="resetNewPassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="New Password"
                        value={resetNewPassword}
                        onChange={(e) => setResetNewPassword(e.target.value)}
                        className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 px-1">
                      Must be 8+ characters with uppercase, lowercase, number & special character
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        id="resetRetypePassword"
                        type={showRetypePassword ? 'text' : 'password'}
                        placeholder="Retype New Password"
                        value={resetRetypePassword}
                        onChange={(e) => setResetRetypePassword(e.target.value)}
                        className="h-12 bg-gray-50 border-gray-300 focus:border-[#071B34] focus:ring-[#071B34] pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowRetypePassword(!showRetypePassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showRetypePassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handleResetPassword}
                    className="w-full h-12 bg-[#071B34] text-white hover:bg-[#0a2545] font-semibold text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Resetting Password...' : 'Reset Password'}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => switchMode('login-password')}
                      className="text-sm text-blue-600 hover:underline font-medium"
                    >
                      Back to Login
                    </button>
                  </div>
                </div>
              )}

              {/* Terms and Privacy */}
              <div className=" mt-2 text-center text-xs text-gray-500">
                By signing in you agree to our{' '}
                <button className="text-blue-600 hover:underline">Terms of service</button>
                {' '}and{' '}
                <button className="text-blue-600 hover:underline">Privacy policy</button>
              </div>
            </CardContent>
          </Card>
          <div id="recaptcha-container"></div>
        </div>

      </div>
    </div>
    </>
  );
}