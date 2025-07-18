'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="block">
        <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-xl">KM</span>
        </div>
      </Link>
    </motion.div>
  );
} 