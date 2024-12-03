import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && gdprConsent) {
      setStatus('success');
      setEmail('');
      setGdprConsent(false);
    } else {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-[#1a2b3c]/30 border-2 border-[#c4a777] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c4a777]"
          />
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
            className="mt-1"
          />
          <label className="text-sm text-gray-300">
            I agree to receive updates and accept the privacy policy
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-[#c4a777] text-white rounded-lg font-semibold hover:bg-[#b39666] transition-colors duration-200"
        >
          Notify Me
        </button>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 text-green-400"
          >
            <Check size={20} />
            <span>Thank you for subscribing!</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 text-red-400"
          >
            <AlertCircle size={20} />
            <span>Please check all required fields.</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};