import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Card className="w-[350px] bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome to Your Fancy App
          </CardTitle>
          <CardDescription className="text-center">
            Let's build something amazing together!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <p className="text-lg text-gray-700 mb-4">
              This is your starting point. The possibilities are endless!
            </p>
          </motion.div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setCount((count) => count + 1)}
            className="group"
          >
            <span className="mr-2">Click me!</span>
            <span className="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              {count}
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
