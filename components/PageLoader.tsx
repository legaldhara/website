// components/PageLoader.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // adjust time if needed
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      // inside PageLoader
{loading && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center bg-white z-[9999]"
  >
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-brand-orange border-solid"></div>
  </motion.div>
)}

    </AnimatePresence>
  );
}
