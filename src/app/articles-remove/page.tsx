'use client';

import Navigation from '@/components/Navigation';
import { AnimatedHeading, AnimatedDiv } from '@/components/AnimatedText';
import Link from 'next/link';

const articles = [
  {
    title: 'Understanding Modern Web Development',
    excerpt: 'An in-depth look at the current state of web development and where it\'s heading.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    link: '/articles/understanding-modern-web-development'
  },
  {
    title: 'Building Scalable Applications with Next.js',
    excerpt: 'Learn how to leverage Next.js features to build performant web applications.',
    date: 'March 10, 2024',
    readTime: '8 min read',
    link: '/articles/building-scalable-applications'
  },
  // Add more articles as needed
];

export default function Articles() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedHeading 
            text="Articles & Insights"
            className="text-3xl md:text-4xl font-bold mb-8 dark:text-white"
          />
          
          <div className="space-y-8">
            {articles.map((article, index) => (
              <AnimatedDiv
                key={article.title}
                className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0"
                delay={index * 0.1}
              >
                <Link href={article.link} className="block group">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {article.excerpt}
                    </p>
                    
                    <span className="text-blue-600 dark:text-blue-400 group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 