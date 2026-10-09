"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ClipLoader } from "react-spinners";

interface LoaderProps {
  loading?: boolean;
  size?: number;
}

export default function Loader({ loading = true, size = 55 }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(7,27,52,0.25)] backdrop-blur-sm"
        >
          <ClipLoader color="#BC9139" loading={loading} size={size} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
