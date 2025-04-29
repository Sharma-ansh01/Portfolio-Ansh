import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false, dark = false }) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 mt-4 bg-purple-600 ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;