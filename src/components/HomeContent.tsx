'use client';

import { AnimatedHeading, AnimatedParagraph, AnimatedDiv } from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeContent() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full aspect-square max-w-xl mx-auto">
          {/* Developer Image */}
          <div className="relative w-full h-full">
            <Image
              src="/developer-pic.png"
              alt="Developer Portrait"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          <AnimatedHeading 
            text="Crafting Clean Code, Smart Systems, and Seamless Delivery."
            className="text-4xl md:text-4xl font-bold mb-6 dark:text-white"
          />
          
          <AnimatedParagraph 
            text="I'm a Software Engineer with over 10+ years of experience — experienced across all stages of the development process."
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4"
            delay={0.2}
          />
          <AnimatedParagraph 
            text="I build modern applications that combine clean design with solid architecture, supported by CI/CD, Docker, and Kubernetes for smooth, scalable delivery."
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            delay={0.3}
          />
          
          <AnimatedDiv className="flex gap-4 justify-center md:justify-start" delay={0.4}>
            <Link 
              href="/resume.pdf" 
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Resume
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Contact
            </Link>
          </AnimatedDiv>
        </div>
      </div>
    </div>
  );
} 