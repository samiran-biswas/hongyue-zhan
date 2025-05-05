import { motion } from 'framer-motion';
import { Avatar, Divider } from 'antd';
import { FiChevronUp } from 'react-icons/fi';
import profile from "../assets/profile.jpeg"
const HeroSection = ({ theme }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-800'} opacity-70`}></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 py-16 max-w-4xl mx-auto"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="flex justify-center mb-8"
        >
          <Avatar 
            size={160} 
            src={profile}
            className="border-4 border-white shadow-xl"
          />
        </motion.div>
        
        <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          Hongyue (Connie) Zhan
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`text-2xl md:text-3xl mb-6 ${theme === 'light' ? 'text-blue-600' : 'text-blue-300'}`}
        >
          <span className="inline-block mr-2">Biological Scientist</span>
          <span className="inline-block">Medical Translator</span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}
        >
          Bridging the gap between science and patient care through research and multilingual medical communication.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className={`px-6 py-3 rounded-full ${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-blue-700 text-white'} font-medium shadow-md`}
          >
            Contact Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className={`px-6 py-3 rounded-full ${theme === 'light' ? 'bg-white text-blue-600 border border-blue-600' : 'bg-gray-800 text-blue-300 border border-blue-300'} font-medium shadow-md`}
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className={`text-2xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          <FiChevronUp className="rotate-180" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;