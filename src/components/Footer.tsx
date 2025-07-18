'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="fixed bottom-0 w-full bg-white/75 dark:bg-gray-900/75 backdrop-blur-sm z-40 border-t border-gray-200 dark:border-gray-800 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} <span className="font-medium text-black dark:text-white">KibiMy</span>. All Rights Reserved.
            <span className="mx-2">|</span>
            Built with <span className="text-red-500">♡</span> by <span className="font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">KibiMy</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
} 