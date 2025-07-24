'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { AnimatedHeading, AnimatedDiv } from '@/components/AnimatedText';
import { experienceData } from '@/types/experience';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile and Intro Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-10">
            {/* Profile Image Section */}
            <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex-shrink-0">
              <div className="rounded-full overflow-hidden w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
                <Image
                  src="/developer-pic-4.png"
                  alt="Software Engineer"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Experience Card */}
              <div className="absolute bottom-20 -right-5 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <h3 className="text-base font-semibold mb-0.5">Software Engineer</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text">10+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Years</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">Experience</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <AnimatedHeading 
                text="I'm a Passionate Software Engineer"
                className="text-4xl lg:text-5xl font-bold mb-8 dark:text-white"
              />
              
              <AnimatedDiv className="prose dark:prose-invert max-w-none" delay={0.2}>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Senior Software Engineer with over a decade of experience in building enterprise-level applications. 
                  I specialize in full-stack development, cloud infrastructure, and team leadership, bringing extensive 
                  expertise in the complete software development lifecycle.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  My technical journey spans from leading Agile development teams to implementing cloud-based solutions 
                  using modern technologies. I excel in translating complex business requirements into efficient, 
                  scalable solutions while maintaining strong communication with stakeholders.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Core strengths include cloud infrastructure automation, server management, and implementing CI/CD pipelines. 
                  I'm passionate about creating robust, maintainable systems that drive business value through technology.
                </p>

                {/* See Work Button */}
                <a 
                  href="/projects" 
                  className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium 
                           hover:opacity-90 transition-opacity"
                >
                  See Work
                </a>
              </AnimatedDiv>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center dark:text-white">Work Experience</h2>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
              
              {/* Experience Items */}
              <div className="space-y-24">
                {experienceData.experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full" />
                    
                    {/* Content */}
                    <div className={`flex w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center`}>
                      <div className={`w-[45%] ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold dark:text-white">{exp.position}</h3>
                            <div className="flex items-center gap-2">
                              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                              <span className="text-gray-400">•</span>
                              <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 