import { motion } from 'framer-motion';
import { Logo } from './Logo';

export const Hero = () => (
  <motion.section 
    className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <Logo />
    <h1 className="mt-8 text-6xl md:text-7xl font-playfair text-white">
      PERNANCIAL AI
    </h1>
    <h2 className="mt-4 text-4xl md:text-5xl font-playfair text-[#c4a777]">
      Coming Soon
    </h2>
    <p className="mt-6 text-xl text-gray-300 max-w-2xl">
      Revolutionizing Financial Intelligence with AI
    </p>
  </motion.section>
);