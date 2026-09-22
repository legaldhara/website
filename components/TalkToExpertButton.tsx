'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function TalkToExpertButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const router = useRouter();

  const messages = [
    'Talk to Expert',
    'Talk to a Lawyer',
    'Talk to CA or CS',
    'Talk to IP Lawyer',
  ];

  useEffect(() => {
    const cycle = () => {
      if (!isHovered) {
        setIsExpanded(true);

        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % messages.length);
        }, 800);

        setTimeout(() => {
          if (!isHovered) setIsExpanded(false);
        }, 2000);
      }
    };

    const interval = setInterval(cycle, 3000);
    return () => clearInterval(interval);
  }, [isHovered, messages.length]);

  return (
    <motion.div
      className="fixed bottom-8 right-14 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1.2,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.button
        className="relative bg-gradient-to-r from-deep-blue to-[#0a2347] text-white rounded-full shadow-lg hover:shadow-2xl transition-shadow flex items-center gap-0 overflow-hidden border-2 border-brand-orange"
        animate={{
          width: isExpanded || isHovered ? '200px' : '64px',
          height: '64px',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.92 }}
        transition={{
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        onClick={() => router.push('/contact')}
      >
        {/* Anime-style character illustration */}
        <motion.div
          className="flex items-center justify-center min-w-[64px] h-full"
          transition={{ duration: 0.4 }}
        >
       <Image
  src="assets/girl-1.webp"
  alt="Support Character"
  width={55}
  height={55}
  className="rounded-full object-contain w-[55px] h-[55px]" // keeps exact small size
  sizes="55px" // 👈 serve only a small 55px-wide optimized image// 👈 optional, smaller file (~80–90% smaller)
  loading="lazy"
/>
        </motion.div>

        {/* Animated text */}
        <AnimatePresence mode="wait">
          <motion.span
            key={messages[currentTextIndex]}
            className="font-semibold text-sm pr-5 whitespace-nowrap"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.4 }}
          >
            {messages[currentTextIndex]}
          </motion.span>
        </AnimatePresence>

        {/* Background pulse */}
        <motion.div
          className="absolute inset-0 bg-brand-orange rounded-full -z-10"
          animate={{
            scale: isExpanded || isHovered ? [1, 1.05, 1] : 1,
            opacity: isExpanded || isHovered ? [0.1, 0.2, 0.1] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.button>
    </motion.div>
  );
}
