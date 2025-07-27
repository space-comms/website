import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-primary-600" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
