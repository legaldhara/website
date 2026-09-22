import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import toast from 'react-hot-toast';
import { useAuthStore } from '@/store/useAuthStore';
import { useState, useEffect } from 'react';
import { getApiBaseUrl } from '@/lib/getApiBaseUrl';


const urll = getApiBaseUrl();
console.log("base url ", urll)

export const secureApi = axios.create({
  baseURL: getApiBaseUrl() || 'http://localhost:3000',
  withCredentials: true,
});


let isRefreshing = false;
let failedQueue: { resolve: (value?: unknown) => void; reject: (reason?: any) => void; }[] = [];

const processQueue = (error: Error | null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};




// Hook for secure API requests with auto token refresh
export const useSecureApi = () => {
  const { isAuthenticated , logout } = useAuthStore()
  const [isTokenRefreshing, setIsTokenRefreshing] = useState(false);

  // Set up request interceptor
  useEffect(() => {
    const requestInterceptor = secureApi.interceptors.request.use(
      async (config) => {
        try {
          // Add CSRF protection header
          config.headers = config.headers || {};
          config.headers['X-Requested-With'] = 'XMLHttpRequest';
          return config;
        } catch (error) {
          console.error('Failed to prepare request:', error);
            logout();
          return Promise.reject(new Error('Authentication error'));
        }
      },
      (error) => Promise.reject(error)
    );

    // Set up response interceptor
    const responseInterceptor = secureApi.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (isRefreshing) {
            // If another request is already refreshing, queue this request
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then(() => secureApi(originalRequest))
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          isRefreshing = true;
          setIsTokenRefreshing(true);

          try {
            const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/refresh`, {
              method: 'POST',
              credentials: 'include',
            });

            if (!refreshResponse.ok) {
              throw new Error('Refresh token expired or invalid');
            }

            processQueue(null);
            return secureApi(originalRequest);
          } catch (refreshError) {
            processQueue(refreshError as Error);
            logout();
            toast.error("Session expired. Please login again.");
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
            setIsTokenRefreshing(false);
          }
        }

        // Handle other error cases
        if (error.response) {
          switch (error.response.status) {
            case 403:
              toast.error("You do not have permission to perform this action");
              break;
            case 429:
              toast.error("Rate limit exceeded. Please try again later.");
              break;
            case 500:
              toast.error("Server error. Please try again later."); 
              break;
            default:
              const errorMessage =
                (error.response.data as { message: string })?.message ||
                'An error occurred. Please try again.';

               toast.error(errorMessage);
          }
        } else if (error.request) {
            toast.error('Network error. Please check your connection.')
        }
        else if (error.message?.includes("TOO_MANY_ATTEMPTS_TRY_LATER")) {
            toast.error('Too many request, try later!') 
        }
        else {
           toast.error("An error occurred. Please try again..");

        }

        return Promise.reject(error);
      }
    );

    return () => {
      secureApi.interceptors.request.eject(requestInterceptor);
      secureApi.interceptors.response.eject(responseInterceptor);
    };
  }, [isAuthenticated, isTokenRefreshing]);

  const secureRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await secureApi(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { secureRequest };
};