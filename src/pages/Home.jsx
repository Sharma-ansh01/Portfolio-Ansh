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
                Hi! I'm <span className="text-purple-600 dark:text-purple-400">Ansh Sharma</span>
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
                  onClick={() => window.open('https://drive.google.com/file/d/1jyNUuUgx0Q7ouAPOqVqUyBzvGfu1G3jg/view?usp=sharing', '_blank')}
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
                  href="https://github.com/Sharma-ansh01" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ansh-sharma-a21915257/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/humpy_07?igsh=MWhvcThjbzh6enlhaw==" 
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
                <div className="relative h-200 w-150 md:h-120 md:w-96 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                  <img 
                    src="https://media-hosting.imagekit.io/dfb1d866388f40e9/my%20pic.jpg?Expires=1840575664&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xkowZG8v-8jW0sSDx7MsVM-8TFa18WarsdPKut6MF0dCZzV0hYAmhGh0meajd-6w5d6p-onKM2wEBETd-OpKB0Q6DxrizEJxsn9yFVap4Vg8FYUpNns4aPcIGzNMvnhthLe~iuYfRw~tkU0-DjkgOQFP-LY70PC4acFfRc~~bP39RsTbnCofVz4J01gHaAUF4Jp-5gViOEDyUqP01m2cELbK4qG1wTlp2GQDbVaDIUdZJzbR-kcrQfJFEz7CGzsPxypoJdyuR613OSx8yFn-hiztjZtpQiUmodEMKGh82HELYd7Jmkhd288ek7phYHHi6q5DBRUjNuLXRUpuuFrv3A__" 
                    alt="Ansh Sharma" 
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
    title: "Crop Yield Prediction",
    description: "Developed a Machine Learning-based Crop Yield Prediction System using Random Forest and XGBoost (95.51% accuracy), with a Streamlit interface enabling farmers to get instant, data-driven yield predictions.",
    image: "https://media-hosting.imagekit.io/de03c16656694ff8/Screenshot%202025-04-28%20032504.png?Expires=1840610500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wkALgTfyhG4luEzRRNI0bThaQNTay9xFCcya73BPTPdXJ1PLe0mfPw8xu3Srf1IpSFdOexDMUPnXpd2bKSVLy2QjrTutexla8fz~FPqh58CNjmeqHzJxs45m0lv7CeXZJf2PX22CxeFEGsUMU9lsb1h3hApECPdVuBc4gsYPOm70HT3PLsZYC0HEpWma86JQApyns6coSDzeJp8XIju7fXQ~bLmhf-n4pxvbRdCCpUM~ck7R4CTFc92JJwkIBm86gKQ8uzgZmHmDkHMo4lC~AZgCNbXk~cWR4ZLpAuKtet58j9byGRDNreP649YWp~CCtjKhF2kRoH965nI37Fnk9Q__"
  },
  {
    title: "Pha5e Replica",
    description: "Recreated the Hero section of the PHA5E website using HTML, Tailwind CSS, and GSAP, featuring responsive design, interactive hover effects, and smooth UI animations.",
    image: "https://media-hosting.imagekit.io/0db91a26ccb64c8c/Screenshot%202025-04-30%20151706.png?Expires=1840614441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ED5n6nhiYCLIRtC69FYhkZcAvcSXzd5y3znIEFqt-QFuizYV~0mNr19BjQUbw3XBxAbbe0q1lnJvULyIGdHusSrs4FxEX3sKZhbhdNj5F6ic5qFFG2ZaXxgDH0vN-1xyp-jnVuJnbripZ-~OwgoyIiuyelT-4z13NLZFvmoWtmDFKPiAQF3chYcUVf3kSl-7hZ4EM4ktP1ZAtgiSO9QZlzFDqlR621ZYsofIb0aarQw8U-wY0Ywkp9GtR3TVZh90EYyxrth2zw0XWrRMsMDz2J9jGtGYyg15JMFWQhi5JwMxqxmqqbm~XBRoslnZ6xxlkUCtsz7pqawZR-vMZ1UYRA__"
  },
  {
    title: "Restaurant Reservation System",
    description: "Developed a full-stack Restaurant Reservation System using React, Express, MongoDB, and JavaScript, featuring a user-friendly interface for booking tables, managing reservations, and streamlining restaurant operations.",
    image: "https://media-hosting.imagekit.io/d5b0b0eaeb3d4e12/Screenshot%202025-04-30%20155842.png?Expires=1840617563&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Vqi24dFG5wB~5btkgcPiIKxEPX71HcODO~Fq2gLFrUd1NSw7lMMyvRUVc7xD2Bo5NoAIvEdQkl002Oym19MwzQsF8rrUzmUoFKo9~bKx8JlgqzbL0eCQOA3UKPOSnElLGDCfd4YrYdYHbURHoMv9pYduK3sPrBb2OvkFZi9U4TZaOugEtcdWRMRT1km1OpSv03WAqNPoXrlqbZzLfd98GI9D9JrcUb~le4cYHTAAo0ztkVNJMZgkA2sSvcNRYzbJKkty~J52e7IMXKFo3ns9gD~eokhcGadiyismTduU~o~e9Y8qfgl3kNJQTr49sRCuvHCBRpbZxMrt2A73WFHAHA__"
  }
];

export default Home;