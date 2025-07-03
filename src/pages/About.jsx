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
                I am a passionate and dedicated student currently pursuing my B.E. in Information Technology at Panjab University. With a strong interest in both front-end and back-end development, I enjoy building responsive web applications that are both user-friendly and performance-driven. My technical journey has led me to explore modern frameworks, no-code tools, and automation platforms, which I leverage to design efficient, scalable solutions. I also have hands-on experience in data analysis and visualization, allowing me to interpret complex datasets and extract meaningful insights.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Beyond technical skills, I value continuous learning and creative problem-solving. I thrive in collaborative environments where innovation and attention to detail are prioritized. Whether it's crafting a clean user interface, streamlining workflows with automation, or developing robust APIs, I take pride in delivering high-quality work. My goal is to contribute to impactful projects that blend technology with real-world solutions while continually evolving as a developer and technologist.
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
                  onClick={() => window.open('https://drive.google.com/file/d/1nwHKhQT1V5uICCw0Exzxcd2o2gfhsxNc/view?usp=sharing')}
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
                    src="https://i.ibb.co/JWqxSLQz/My-pic.jpg"
                    alt="Ansh Sharma" 
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
            title="Academics" 
            subtitle="My academic journey" 
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
                    {item.position} | <span className="text-purple-600 dark:text-purple-400">{item.university}</span>
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
    title: "Full-stack Development",
    description: "Building responsive, interactive user interfaces with modern frameworks and libraries, and developing robust server-side applications with RESTful APIs.",
    icon: <Layout size={36} />
  },
  {
    title: "Automation & Workflow Optimization",
    description: "Developing and utilizing automated tools to enhance efficiency, reduce manual effort, and optimize repetitive tasks across workflows.",
    icon: <Server size={36} />
  },
  {
    title: "Database Design",
    description: "Designing and optimizing database schemas for efficient data storage and retrieval.",
    icon: <Database size={36} />
  },
  {
    title: "No-Code Design",
    description: "Designing intuitive and functional digital products using no-code tools for rapid prototyping and development.",
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
    position: "B.E. in Information Technology",
    university: "Panjab University",
    period: "Nov 2022 - Present",
    description: "Pursuing a Bachelor of Engineering in Information Technology at Panjab University, with a focus on software development, data structures, algorithms, and modern technologies in computing."
  },
  {
    position: "Intermidiate",
    university: "R.R.K School",
    period: "Mar 2020 - Feb 2021",
    description: "Completed Intermediate education at R.R.K School with a strong foundation in Mathematics, Physics, and Chemistry, preparing for advanced studies in technology and engineering."
  },
  {
    position: "High School ",
    university: "R.R.K School",
    period: "March 2018 - Feb 2019",
    description: "Completed High School at R.R.K School with a focus on core subjects including Science, Mathematics, and English, laying the groundwork for future academic and technical pursuits."
  }
];

export default About;