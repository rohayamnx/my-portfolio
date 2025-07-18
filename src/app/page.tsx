'use client';

import Navigation from '@/components/Navigation';
import HomeContent from '@/components/HomeContent';
import HireCircle from '@/components/HireCircle';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen items-center">
        <HomeContent />
      </main>
      <HireCircle />
    </>
  );
}
