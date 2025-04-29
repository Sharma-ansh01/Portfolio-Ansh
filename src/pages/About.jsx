import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Users, Lightbulb, Download } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import Button from '../components/Button';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  return (
    <>
      <ScrollToTop />
      
      <motion.div 
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="About Me" 
            subtitle="Learn more about my background and skills" 
            centered
          />
          
          <div className="flex flex-col md:flex-row gap-12 mb-20">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm a passionate software developer with a strong foundation in web and mobile application development. With over 5 years of experience in the tech industry, I've had the opportunity to work on a diverse range of projects that have sharpened my skills and broadened my perspective.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My journey in software development began during my undergraduate studies in Computer Science at [Your University], where I discovered my love for creating elegant, user-friendly applications. Since then, I've worked with startups and established companies alike, always focusing on delivering high-quality, scalable solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities like hiking and photography.
                </p>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<Download size={18} />}
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download CV
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-md">
                <motion.div 
                  className="absolute -inset-4 rounded-2xl bg-purple-600/20 dark:bg-purple-600/10 blur-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1], 
                    opacity: [0.5, 0.7, 0.5] 
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                    alt="Your Name" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          <SectionTitle 
            title="My Skills" 
            subtitle="Technologies and tools I work with" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SkillCard 
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              </motion.div>
            ))}
          </div>
          
          <SectionTitle 
            title="Experience" 
            subtitle="My professional journey" 
            centered
          />
          
          <div className="space-y-12 max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                className="relative pl-10 pb-8 border-l-2 border-purple-200 dark:border-purple-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-purple-600"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.position} | <span className="text-purple-600 dark:text-purple-400">{item.company}</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{item.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Skills data
const skills = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
    icon: <Layout size={36} />
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications and RESTful APIs.",
    icon: <Server size={36} />
  },
  {
    title: "Database Design",
    description: "Designing and optimizing database schemas for efficient data storage and retrieval.",
    icon: <Database size={36} />
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and aesthetically pleasing user experiences.",
    icon: <Layout size={36} />
  },
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
    icon: <Code size={36} />
  },
  {
    title: "Problem Solving",
    description: "Analyzing complex issues and developing effective solutions.",
    icon: <Lightbulb size={36} />
  }
];

// Experience data
const experience = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2022 - Present",
    description: "Leading frontend development for enterprise applications, implementing modern React patterns and optimizing performance. Mentoring junior developers and contributing to architectural decisions."
  },
  {
    position: "Frontend Developer",
    company: "Digital Innovations",
    period: "Mar 2019 - Dec 2021",
    description: "Developed responsive web applications using React and modern CSS frameworks. Collaborated with designers to implement pixel-perfect interfaces and improved application performance."
  },
  {
    position: "Junior Web Developer",
    company: "WebCraft Studio",
    period: "Jun 2017 - Feb 2019",
    description: "Built and maintained client websites and web applications. Gained experience with JavaScript frameworks, responsive design, and version control systems."
  }
];

export default About;