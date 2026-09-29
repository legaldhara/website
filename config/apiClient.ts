import axios, { AxiosRequestConfig } from "axios";
import { auth } from "./firebaseConfig";
import { getApiBaseUrl } from "@/lib/getApiBaseUrl";

export const secureApi = axios.create({ baseURL: getApiBaseUrl() || "http://localhost:4001", withCredentials: false });
secureApi.interceptors.request.use(async (config) => {
  const token = await auth.currentUser?.getIdToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const useSecureApi = () => ({
  secureRequest: async <T>(config: AxiosRequestConfig): Promise<T> => (await secureApi(config)).data,
});
