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
  { label: 'Crop Yield Prediction', value: 'model' },
  { label: 'Web Apps', value: 'web' },
  { label: 'PowerBi', value: 'design' }
];

// Project data
const projects = [
  {
    title: "Crop Yield Prediction",
    description: "Developed a Machine Learning-based Crop Yield Prediction System using Random Forest and XGBoost (95.51% accuracy), with a Streamlit interface enabling farmers to get instant, data-driven yield predictions.",
    image: "https://i.ibb.co/GQNq2FpC/Screenshot-2025-04-28-032504.png" ,
    category: "model",
    technologies: ["Python", "XGBoost", "Random Forest", "Streamlit"],
    demoLink: "https://crop-yield-prediction-system-27hmwwjt6srgd4i5j6knng.streamlit.app/",
    codeLink: "https://github.com/Sharma-ansh01/Crop-Yield-Prediction-System"
  },
  {
    title: "Placement Analysis Dashboard",
    description: "A productivity tool to help teams organize and prioritize their projects.",
    image: "https://i.ibb.co/Q7vv4gcS/Screenshot-2025-04-30-141606.png" ,
    category: "design",
    technologies: ["PowerBi", "Excel"],
    demoLink: "https://1drv.ms/u/c/5e05efeb77650ec0/Efvvaj4iyaFPstyALAJT8YMB-4mVbjQqX7hFlDuHA77FBA?e=bDKhZ0",
    codeLink: "https://github.com/Sharma-ansh01/Placement-Analysis-Dashboard"
  },
  {
    title: "Pha5e Replica",
    description: "Recreated the Hero section of the PHA5E website using HTML, Tailwind CSS, and GSAP, featuring responsive design, interactive hover effects, and smooth UI animations.",
    image:"https://i.ibb.co/G46YLkWY/Screenshot-2025-04-30-151706.png" ,
    category: "web",
    technologies: ["HTML", "Tailwind CSS", "GSAP"],
    demoLink: "https://pha5e-replica-assessment-codb.vercel.app/",
    codeLink: "https://github.com/Sharma-ansh01/Pha5e-Replica-assessment"
  },
  {
    title: "Restaurant Reservation System",
    description: "Developed a full-stack Restaurant Reservation System using React, Express, MongoDB, and JavaScript, featuring a user-friendly interface for booking tables, managing reservations, and streamlining restaurant operations.",
    image: "https://i.ibb.co/b5ftvSdP/Screenshot-2025-04-30-155842.png" ,
    category: "web",
    technologies: ["React", "MongoDB", "Express", "JavaScript", "HTML", "CSS"],
    demoLink: "https://restaurant-reservation-system-alpha.vercel.app/",
    codeLink: "https://github.com/Sharma-ansh01/Restaurant-Reservation-System"
  },
  
];

export default Projects;