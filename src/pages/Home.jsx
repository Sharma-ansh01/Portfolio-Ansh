import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <>
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm font-medium inline-block mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Welcome to my portfolio
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Hi! I'm <span className="text-purple-600 dark:text-purple-400">Your Name</span>
                <div>Software Developer</div>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                I build exceptional and accessible digital experiences for the web and mobile applications.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link to="/contact">
                  <Button 
                    variant="primary" 
                    size="lg"
                    icon={<ArrowRight size={18} />}
                  >
                    Get in Touch
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  size="lg"
                  icon={<Download size={18} />}
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download CV
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-5 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://instagram.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-4 rounded-full bg-purple-600/20 dark:bg-purple-600/10 blur-2xl"
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
                <div className="relative h-72 w-72 md:h-96 md:w-96 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                    alt="Your Name" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Check out some of my recent work
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link to="/projects">
                <Button 
                  variant="outline" 
                  size="md"
                  icon={<ArrowRight size={16} />}
                >
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <Link to="/projects">
                    <Button 
                      variant="primary" 
                      size="sm"
                      icon={<ArrowRight size={16} />}
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Featured projects data
const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart and payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Task Management App",
    description: "A productivity tool to help teams organize and prioritize their projects.",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Fitness Tracker",
    description: "An application to track workout routines and monitor fitness progress.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default Home;