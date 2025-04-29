import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} Ansh Sharma. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Sharma-ansh01" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ansh-sharma-a21915257/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/humpy_07?igsh=MWhvcThjbzh6enlhaw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center">
          <p>Made with</p>
          <Heart className="h-4 w-4 mx-1 text-red-500 inline" />
          <p>using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;