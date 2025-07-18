'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HireCircle() {
  return (
    <motion.div
      className="fixed left-8 bottom-0 w-40 h-40 z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <Link href="/contact" className="block w-full h-full transform hover:rotate-12 transition-transform duration-300">
        <div className="relative w-full h-full group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 filter blur-xl" />
          <Image
            src="/hire-circle.svg"
            alt="Hire Circle"
            width={160}
            height={160}
            className="w-full h-full drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
            priority
          />
        </div>
      </Link>
    </motion.div>
  );
} 