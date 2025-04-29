import { Code } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      <span className="font-bold text-xl text-gray-900 dark:text-white">Portfolio</span>
    </div>
  );
};

export default Logo;