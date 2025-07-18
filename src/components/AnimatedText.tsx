'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedHeading({ text, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <motion.h1 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {text}
    </motion.h1>
  );
}

export function AnimatedParagraph({ text, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <motion.p 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {text}
    </motion.p>
  );
}

export function AnimatedDiv({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
} 