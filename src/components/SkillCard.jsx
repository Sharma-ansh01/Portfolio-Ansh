import { motion } from 'framer-motion';

const SkillCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-purple-600 dark:text-purple-400 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;