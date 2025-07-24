'use client';

import Navigation from '@/components/Navigation';
import { AnimatedHeading, AnimatedDiv } from '@/components/AnimatedText';
import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/types/projects';
import ProjectModal from '@/components/ProjectModal';
import { motion } from 'framer-motion';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
                delay={index * 0.1}
              >
                <motion.div 
                  className="relative h-48 w-full cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedProject(index)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click More
                    </span>
                  </div>
                </motion.div>
                
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
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(index)}
                    className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    View Details
                  </motion.button>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
} 