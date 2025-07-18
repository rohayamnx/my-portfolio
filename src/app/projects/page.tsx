'use client';

import Navigation from '@/components/Navigation';
import { AnimatedHeading, AnimatedDiv } from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack application built with Next.js and MongoDB.',
    image: '/project1.jpg',
    link: 'https://project1.com',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with real-time updates.',
    image: '/project2.jpg',
    link: 'https://project2.com',
    tags: ['React', 'Node.js', 'Socket.io']
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedHeading 
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold mb-8 dark:text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedDiv
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                delay={index * 0.1}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    View Project
                  </Link>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 