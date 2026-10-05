import axios from "axios";

import { getApiBaseUrl } from "@/lib/getApiBaseUrl";

export const publicApi = axios.create({
  baseURL: getApiBaseUrl(),
  withCredentials: false,
});
