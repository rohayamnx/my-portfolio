'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Total animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        className={`fixed inset-0 pointer-events-none z-50 transition-transform duration-500 ease-in-out bg-black
          ${isTransitioning ? 'translate-x-0' : '-translate-x-full'}`}
      />
      <div
        className={`fixed inset-0 pointer-events-none z-40 transition-transform duration-500 ease-in-out bg-[#40E0D0] delay-[100ms]
          ${isTransitioning ? 'translate-x-0' : '-translate-x-full'}`}
      />
      <div
        className={`fixed inset-0 pointer-events-none z-30 transition-transform duration-500 ease-in-out bg-white delay-[200ms]
          ${isTransitioning ? 'translate-x-0' : '-translate-x-full'}`}
      />
    </>
  );
} 