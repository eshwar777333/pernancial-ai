import { motion } from 'framer-motion';

export const Logo = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-24 h-24 relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b3c] to-[#2f3640] rounded-lg transform rotate-45">
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
        <span className="text-[#c4a777]">P</span>
        <span className="text-white">AI</span>
      </div>
    </div>
  </motion.div>
);