import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ScrollToTop from '../components/ScrollToTop';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
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
            title="My Projects" 
            subtitle="Explore my recent work and personal projects" 
            centered
          />
          
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

// Project categories
const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'UX/UI Design', value: 'design' }
];

// Project data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart and payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Task Management App",
    description: "A productivity tool to help teams organize and prioritize their projects.",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/yourusername/taskmanager"
  },
  {
    title: "Fitness Tracker",
    description: "An application to track workout routines and monitor fitness progress.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Chart.js"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/yourusername/fitnesstracker"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media analytics and content management.",
    image: "https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["React", "Redux", "Express", "PostgreSQL"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/yourusername/socialdashboard"
  },
  {
    title: "Weather App",
    description: "A mobile app that provides real-time weather forecasts based on location.",
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mobile",
    technologies: ["React Native", "Weather API", "Geolocation"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/yourusername/weatherapp"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "design",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/yourusername/portfolio"
  }
];

export default Projects;