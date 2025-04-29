import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover object-center"
          animate={{ 
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full dark:bg-purple-900/30 dark:text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.demoLink && (
            <Button 
              variant="primary" 
              size="sm"
              icon={<ExternalLink size={16} />}
              onClick={() => window.open(project.demoLink, '_blank')}
            >
              Live Demo
            </Button>
          )}
          {project.codeLink && (
            <Button 
              variant="outline" 
              size="sm"
              icon={<Github size={16} />}
              onClick={() => window.open(project.codeLink, '_blank')}
            >
              View Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;