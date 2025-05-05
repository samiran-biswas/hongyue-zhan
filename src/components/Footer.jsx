import { motion } from 'framer-motion';

const Footer = ({ theme }) => {
  return (
    <footer className={`py-8 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
        >
          © {new Date().getFullYear()} Hongyue (Connie) Zhan. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;