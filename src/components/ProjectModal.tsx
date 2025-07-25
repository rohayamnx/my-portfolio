import { Project } from '@/types/projects';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'metrics'>('demo');

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col"
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
          <h2 className="text-xl font-bold dark:text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b dark:border-gray-700">
          {['demo', 'architecture', 'metrics'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(tab as any)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {activeTab === 'demo' && (
              <div className="space-y-4">
                <div className="relative h-[250px] w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="text-base font-semibold mb-3 dark:text-white">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      {project.features.map((feature, index) => (
                        <li 
                          key={index}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}


            {activeTab === 'architecture' && project.architecture && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-slate-50/90 to-blue-50/90 dark:from-slate-800/40 dark:to-blue-900/40 p-4 rounded-lg border border-slate-200/60 dark:border-slate-700/40">
                  <h3 className="text-base font-semibold mb-3 text-slate-700 dark:text-slate-200">
                    Frontend
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {project.architecture.frontend.map(tech => (
                      <li key={tech} className="flex items-center text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-500 rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-zinc-50/90 to-purple-50/90 dark:from-zinc-800/40 dark:to-purple-900/40 p-4 rounded-lg border border-zinc-200/60 dark:border-zinc-700/40">
                  <h3 className="text-base font-semibold mb-3 text-zinc-700 dark:text-zinc-200">
                    Backend
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {project.architecture.backend.map(tech => (
                      <li key={tech} className="flex items-center text-zinc-600 dark:text-zinc-300">
                        <span className="w-1.5 h-1.5 bg-purple-400 dark:bg-purple-500 rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-stone-50/90 to-emerald-50/90 dark:from-stone-800/40 dark:to-emerald-900/40 p-4 rounded-lg border border-stone-200/60 dark:border-stone-700/40">
                  <h3 className="text-base font-semibold mb-3 text-stone-700 dark:text-stone-200">
                    Database
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {project.architecture.database.map(tech => (
                      <li key={tech} className="flex items-center text-stone-600 dark:text-stone-300">
                        <span className="w-1.5 h-1.5 bg-emerald-400 dark:bg-emerald-500 rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-neutral-50/90 to-amber-50/90 dark:from-neutral-800/40 dark:to-amber-900/40 p-4 rounded-lg border border-neutral-200/60 dark:border-neutral-700/40">
                  <h3 className="text-base font-semibold mb-3 text-neutral-700 dark:text-neutral-200">
                    Deployment
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {project.architecture.deployment.map(tech => (
                      <li key={tech} className="flex items-center text-neutral-600 dark:text-neutral-300">
                        <span className="w-1.5 h-1.5 bg-amber-400 dark:bg-amber-500 rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && project.metrics && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {project.metrics.users?.toLocaleString()}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1 text-sm font-medium">Active Users</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {project.metrics.transactions?.toLocaleString()}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1 text-sm font-medium">Transactions</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {project.metrics.performance}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-1 text-sm font-medium">Performance</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with action buttons */}
        <div className="border-t dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex justify-center gap-3">
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border-2 border-black dark:border-white transition-all duration-200 text-sm font-medium"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M8 5v14l11-7z"
                  />
                </svg>
                Live Demo
              </Link>
            )}
            {project.codeUrl && (
              <Link
                href={project.codeUrl}
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-white text-gray-700 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Source Code
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 