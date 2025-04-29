import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-16 h-16 border-4 border-t-purple-600 border-r-transparent border-b-purple-600 border-l-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 1,
            ease: "linear"
          }}
        />
        <motion.p 
          className="mt-4 text-gray-800 dark:text-gray-200 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;