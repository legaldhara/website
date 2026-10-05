"use client"; // Required in Next.js 13 App Router

import { create } from "zustand";
import { publicApi } from "@/config/publicApi";

interface Service {
  governmentCharges: string;
  id: string;
  name: string;
  description: string;
  price: string;
  isActive: boolean;
  note: string;
  createdAt: string;
  _count: {
    applications: number;
    payments: number;
  };
}

interface ServicesStore {
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchServices: () => Promise<void>;
}

export const useServicesStore = create<ServicesStore>((set) => ({
  services: [],
  loading: false,
  error: null,

  fetchServices: async () => {
    set({ loading: true, error: null });

    try {
      const res = await publicApi.get(`/api/v1/service/services?page=1&limit=50`);
      if (!res) throw new Error("Failed to fetch services");

      const data = res.data
      if (data.success) {
        set({ services: data.services, loading: false });
      } else {
        set({ error: "Failed to fetch services", loading: false });
      }
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
