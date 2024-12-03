import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => (
  <footer className="py-8 px-4">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex space-x-6 mb-6">
        {[
          { Icon: Twitter, href: '#' },
          { Icon: Linkedin, href: '#' },
          { Icon: Github, href: '#' }
        ].map(({ Icon, href }, index) => (
          <motion.a
            key={index}
            href={href}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-[#c4a777] transition-colors duration-200"
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </div>
      <p className="text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} PERNANCIAL AI. All rights reserved.
      </p>
    </div>
  </footer>
);