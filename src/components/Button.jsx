import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
}) => {
  const baseStyles = "rounded-md font-medium transition-all duration-200 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg dark:bg-purple-500 dark:hover:bg-purple-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white"
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  const disabledStyles = disabled 
    ? "opacity-60 cursor-not-allowed" 
    : "hover:scale-105 active:scale-95";
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;