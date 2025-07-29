'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
  ];

  const socialLinks = [
    {
      name: 'Threads',
      url: 'https://threads.net/rohayamnx',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.013-5.392 2.866-8.863 7.828-9.497C10.029 2.379 10.758 2.252 11.5 2c2.021-.04 3.697.723 5.209 2.052 1.955 1.372 3.067 3.34 3.979 5.674-.146.087-.294.173-.447.251-2.092 1.102-3.68 1.069-5.082.68-1.549-.432-2.863-1.287-4.276-2.206l-.527-.344c-.748-.486-1.445-.94-2.102-1.25-1.764-.831-3.764-.736-5.726.273-.443.227-.662.4-.832.54a.5.5 0 0 0 .305.874h.06c2.071 0 3.725.535 5.158 1.677 1.584 1.262 2.426 2.981 2.699 4.604.146.862.174 1.772.085 2.703-.528 5.536-5.098 6.445-6.177 6.568a.5.5 0 0 0 .182.986c.075-.007.151-.011.228-.011 2.271 0 4.659-.739 6.092-2.172l.103-.103c.209-.209.382-.433.518-.672.403.334.836.626 1.293.873 1.121.605 2.31.904 3.534.884 1.225-.018 2.412-.35 3.526-.981 1.595-.905 2.601-2.094 2.993-3.538.276-1.024.278-1.653.27-2.066a1.5 1.5 0 0 0-1.497-1.455h-.087c-.093 0-.187.004-.28.012h-.015c-.09.005-.179.012-.268.012-1.268 0-2.266-.669-2.913-1.274a3.861 3.861 0 0 1-.691-.893.5.5 0 0 0-.626-.206c-.415.166-.827.369-1.229.608-1.304.774-2.64 1.572-4.637 1.572h-.009c-.258-.001-.517-.013-.773-.037-1.662-.155-2.976-.955-3.827-2.322-.576-.927-.804-1.93-.679-2.957.12-.981.534-1.87 1.164-2.5.733-.73 1.789-1.129 2.983-1.129.869 0 1.697.198 2.46.589.59.302 1.163.673 1.753 1.056.142.092.284.184.427.276 1.355.876 2.958 1.91 4.851 2.453 1.681.482 3.518.527 5.841-.5.063-.028.127-.055.192-.081.149-.059.301-.119.452-.177.087-.033.17-.07.251-.108.094-.044.189-.087.281-.134a.5.5 0 0 0 .235-.621c-1.054-2.563-2.517-4.835-4.545-6.462C15.867 1.533 13.791.548 11.236.548h-.129c-.753.003-1.497.081-2.216.232-5.668.728-8.962 4.732-8.977 10.776v.072c0 3.844.927 6.997 2.686 9.14 2.148 2.627 5.285 3.971 9.325 3.998h.008c.272 0 .546-.005.821-.016 4.796-.192 8.071-2.359 9.306-6.142.385-1.175.571-2.438.552-3.75-.019-1.193-.247-2.374-.678-3.507a.5.5 0 0 0-.725-.236c-1.687.977-3.55 1.277-5.53.893-2.137-.415-3.883-1.537-5.358-2.487-.126-.081-.252-.163-.379-.245-.634-.411-1.262-.816-1.931-1.153-.528-.266-1.105-.402-1.712-.402-.725 0-1.353.232-1.799.676-.342.342-.602.836-.681 1.304-.075.617.049 1.189.369 1.696.532.851 1.425 1.373 2.518 1.474.177.016.355.024.53.024h.007c1.525 0 2.526-.615 3.716-1.321l.225-.133a.5.5 0 0 0 .201-.663 2.89 2.89 0 0 0-.492-.645c-.478-.478-1.119-.837-1.901-1.068-.849-.249-1.695-.237-2.556.033a.5.5 0 0 0-.112.925c.861.269 1.394.703 1.712 1.392.161.346.238.725.238 1.105 0 .177-.018.354-.054.527-.198.953-.944 1.651-2.221 2.078-.827.276-1.794.38-2.892.311a.499.499 0 0 0-.529.459c-.015.138-.031.287-.045.435-.1.995-.185 1.859-.135 2.718.147 2.521 1.267 4.665 3.145 6.026 1.748 1.266 3.987 1.932 6.452 1.932z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rohayamnx',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rohayamnx',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/75 dark:bg-gray-900/75 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative ${
                    pathname === item.path
                      ? 'text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full h-[2px] w-full bg-black dark:bg-white"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <ThemeToggle />
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 text-gray-900 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 bottom-0 w-3/4 bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col"
            >
              <div className="flex flex-col space-y-4 mt-16">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg ${
                      pathname === item.path
                        ? 'text-black dark:text-white font-bold'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 