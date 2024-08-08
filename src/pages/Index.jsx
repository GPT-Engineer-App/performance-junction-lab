import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Star, Moon, Sun } from 'lucide-react';

const Index = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
    });
  }, [controls]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${theme === 'light' ? 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500' : 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900'}`}>
      <Card className={`w-[400px] ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-md shadow-xl`}>
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className={`text-4xl font-extrabold text-center ${theme === 'light' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'}`}>
              Welcome to Your Fancy App
            </CardTitle>
            <CardDescription className={`text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Let's build something extraordinary together!
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div animate={controls}>
              <Sparkles className={`w-20 h-20 mx-auto mb-6 ${theme === 'light' ? 'text-yellow-400' : 'text-yellow-300'}`} />
            </motion.div>
            <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              Embark on a journey of endless possibilities!
            </p>
            <div className="flex justify-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Star className={`w-8 h-8 ${theme === 'light' ? 'text-purple-500' : 'text-purple-400'}`} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Star className={`w-8 h-8 ${theme === 'light' ? 'text-pink-500' : 'text-pink-400'}`} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Star className={`w-8 h-8 ${theme === 'light' ? 'text-red-500' : 'text-red-400'}`} />
              </motion.div>
            </div>
          </motion.div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCount((count) => count + 1)}
            className={`group ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-700 text-white'}`}
          >
            <span className="mr-2">Increment</span>
            <span className={`${theme === 'light' ? 'bg-purple-500 text-white' : 'bg-purple-400 text-gray-900'} rounded-full px-2 py-1 text-xs group-hover:bg-opacity-80 transition-colors`}>
              {count}
            </span>
          </Button>
          <Button
            variant="outline"
            onClick={toggleTheme}
            className={`${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-700 text-white'}`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
