'use client';

import Navigation from '@/components/Navigation';
import { AnimatedHeading, AnimatedDiv } from '@/components/AnimatedText';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedHeading 
            text="About Me"
            className="text-3xl md:text-4xl font-bold mb-8 dark:text-white"
          />
          
          <AnimatedDiv className="prose dark:prose-invert max-w-none" delay={0.2}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hi, I'm [Your Name]. I'm a passionate full-stack developer with a keen interest in building 
              digital experiences that make a difference. With expertise in modern web technologies, 
              I focus on creating efficient, scalable, and user-friendly applications.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <li className="text-gray-600 dark:text-gray-300">React.js</li>
              <li className="text-gray-600 dark:text-gray-300">Next.js</li>
              <li className="text-gray-600 dark:text-gray-300">TypeScript</li>
              <li className="text-gray-600 dark:text-gray-300">Node.js</li>
              <li className="text-gray-600 dark:text-gray-300">Tailwind CSS</li>
              <li className="text-gray-600 dark:text-gray-300">MongoDB</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Experience</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Senior Developer - Company Name</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                2020 - Present
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Led development of various web applications, focusing on performance optimization
                and implementing best practices in modern web development.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </>
  );
} 