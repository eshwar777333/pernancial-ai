import { motion } from 'framer-motion';

const partners = [
  { name: 'Bloomberg', logo: 'https://img.freepik.com/free-vector/financial-recovery-after-coronavirus_23-2148558699.jpg?t=st=1733222450~exp=1733226050~hmac=b87b774a9396d4214ef243290ead1186e72bcfe16e394c3ea86e70bd51238597&w=1060' },
  { name: 'Reuters', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Financial Times', logo: 'https://img.freepik.com/free-vector/stock-market-analysis-concept_52683-40756.jpg?t=st=1733222813~exp=1733226413~hmac=fd66b46cde8111db435712bb56d1c33cd71088704061d44e62d3fc04875f97e3&w=1060' },
  { name: 'Wall Street Journal', logo: 'https://img.freepik.com/free-vector/manage-money-concept-illustration_114360-8059.jpg?t=st=1733224204~exp=1733227804~hmac=07b9275f2a56b7bbcdd956ff5e26932b388d335187d6f6ecdd8b5856a384f32a&w=1060' }
];

export const SocialProof = () => (
  <section className="py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-gray-400 mb-8">Featured In</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20.7 w-auto transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
