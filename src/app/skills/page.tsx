'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedHeading } from '@/components/AnimatedText';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Skill {
  name: string;
  description: string;
  icon: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Tools' | 'Mobile Development';
  level?: number;
  status: 'learning' | 'recent' | 'active';
}

const skills: Skill[] = [
  // Backend Skills
  {
    name: 'Node.js',
    description: 'Used recently in full-stack project with MongoDB and Firebase integration.',
    icon: '/icons/nodejs.svg',
    category: 'Backend',
    level: 50,
    status: 'learning'
  },
  {
    name: 'Python',
    description: 'Used for AI/ML projects, scripting, and solving 550+ LeetCode DSA problems.',
    icon: '/icons/python.svg',
    category: 'Backend',
    level: 50,
    status: 'learning'
  },
  {
    name: 'Express.js',
    description: 'Used with Node.js to create RESTful APIs and middleware for projects.',
    icon: '/icons/express.svg',
    category: 'Backend',
    level: 50,
    status: 'learning'
  },
  {
    name: 'PHP',
    description: 'My primary language for developing robust web applications and backend systems.',
    icon: '/icons/php.webp',
    category: 'Backend',
    level: 95,
    status: 'active'
  },
  // Frontend Skills
  {
    name: 'React',
    description: 'Building modern and responsive user interfaces with React ecosystem.',
    icon: '/icons/react.svg',
    category: 'Frontend',
    level: 65,
    status: 'recent'
  },
  {
    name: 'Next.js',
    description: 'Creating full-stack applications with server-side rendering.',
    icon: '/icons/nextjs.svg',
    category: 'Frontend',
    level: 65,
    status: 'recent'
  },
  // {
  //   name: 'Vue.js',
  //   description: 'Learning for expanding frontend framework knowledge.',
  //   icon: '/icons/vue.svg',
  //   category: 'Frontend',
  //   level: 45,
  //   status: 'learning'
  // },
  // Database Skills
  // {
  //   name: 'MongoDB',
  //   description: 'NoSQL database for scalable applications.',
  //   icon: '/icons/mongodb.svg',
  //   category: 'Database',
  //   level: 85,
  //   status: 'recent'
  // },
  {
    name: 'PostgreSQL',
    description: 'Relational database for complex data relationships.',
    icon: '/icons/postgresql.svg',
    category: 'Database',
    level: 80,
    status: 'active'
  },
  {
    name: 'MySQL',
    description: 'Relational database for complex data relationships.',
    icon: '/icons/mysql.svg',
    category: 'Database',
    level: 80,
    status: 'active'
  },
  // {
  //   name: 'Redis',
  //   description: 'Exploring for caching strategies and session storage while learning URL shortening.',
  //   icon: '/icons/redis.svg',
  //   category: 'Database',
  //   level: 50,
  //   status: 'learning'
  // },
  // Tools
  {
    name: 'Docker',
    description: 'Containerization and deployment of applications.',
    icon: '/icons/docker.svg',
    category: 'Tools',
    level: 90,
    status: 'active'
  },
  {
    name: 'Git',
    description: 'Version control and collaboration.',
    icon: '/icons/git.svg',
    category: 'Tools',
    level: 90,
    status: 'active'
  },
  {
    name: 'Kubernetes',
    description: 'Learning for container orchestration and scaling.',
    icon: '/icons/kubernetes.svg',
    category: 'Tools',
    level: 55,
    status: 'recent'
  }
];

const categories = [
  { id: 'all', name: 'All', icon: '⚡️' },
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' },
  { id: 'database', name: 'Database', icon: '💾' },
  { id: 'tools', name: 'Tools', icon: '🛠' },
  { id: 'mobile', name: 'Mobile Development', icon: '📱' },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${
        skill.status === 'learning' ? 'border-l-4 border-yellow-500' :
        skill.status === 'recent' ? 'border-l-4 border-green-500' :
        'border-l-4 border-blue-500'
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-semibold dark:text-white">{skill.name}</h3>
            <span className={`text-sm ${
              skill.status === 'learning' ? 'text-yellow-500' :
              skill.status === 'recent' ? 'text-green-500' :
              'text-blue-500'
            }`}>
              {skill.status === 'learning' ? 'Currently Learning' :
               skill.status === 'recent' ? 'Recently Used' :
               'Active Use'}
            </span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
        {skill.level && (
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${
                skill.status === 'learning' ? 'bg-yellow-500' :
                skill.status === 'recent' ? 'bg-green-500' :
                'bg-blue-500'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SkillSection = ({ title, skills }: { title: string, skills: Skill[] }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6 dark:text-white">{title}</h2>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      layout
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </motion.div>
  </div>
);

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category.toLowerCase() === selectedCategory);

  const learningSkills = filteredSkills.filter(skill => skill.status === 'learning');
  const recentSkills = filteredSkills.filter(skill => skill.status === 'recent');
  const activeSkills = filteredSkills.filter(skill => skill.status === 'active');

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedHeading 
            text="My Skill Store" 
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          />

          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                } shadow-md hover:shadow-lg transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Skills Sections */}
          {learningSkills.length > 0 && (
            <SkillSection title="Installing / Currently Learning" skills={learningSkills} />
          )}
          {recentSkills.length > 0 && (
            <SkillSection title="Recently Used" skills={recentSkills} />
          )}
          {activeSkills.length > 0 && (
            <SkillSection title="Active Skills" skills={activeSkills} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SkillsPage; 