import { motion } from 'framer-motion';
import { Brain, LineChart, Shield, Wallet } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'AI-Powered Portfolio Management',
    description: 'Advanced algorithms optimize your investments in real-time for maximum returns.'
  },
  {
    icon: LineChart,
    title: 'Real-time Market Analytics',
    description: 'Instant insights and predictive analysis for informed decision-making.'
  },
  {
    icon: Shield,
    title: 'Smart Investment Strategies',
    description: 'Personalized investment plans backed by cutting-edge AI technology.'
  },
  {
    icon: Wallet,
    title: 'Intelligent Risk Assessment',
    description: 'Sophisticated risk analysis ensuring portfolio protection and growth.'
  }
];

export const Benefits = () => (
  <section className="py-20 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 rounded-lg bg-gradient-to-br from-[#1a2b3c]/50 to-[#2f3640]/50 backdrop-blur-sm"
        >
          <benefit.icon className="w-12 h-12 text-[#c4a777] mb-4" />
          <h3 className="text-xl font-playfair text-white mb-2">{benefit.title}</h3>
          <p className="text-gray-300">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);