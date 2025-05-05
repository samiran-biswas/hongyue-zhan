import { motion } from 'framer-motion';
import { 
  HomeOutlined, 
  UserOutlined, 
  ExperimentOutlined, 
  TranslationOutlined, 
  MailOutlined 
} from '@ant-design/icons';

const FloatingNav = ({ activeSection, setActiveSection, theme, isScrolled }) => {
  const navItems = [
    { id: 'home', icon: <HomeOutlined />, label: 'Home' },
    { id: 'about', icon: <UserOutlined />, label: 'About' },
    { id: 'research', icon: <ExperimentOutlined />, label: 'Research' },
    { id: 'medical', icon: <TranslationOutlined />, label: 'Medical' },
    { id: 'contact', icon: <MailOutlined />, label: 'Contact' },
  ];

  return (
    <div className="flex justify-center">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`fixed top-2 z-50 w-full md:w-1/2 rounded-full shadow-lg ${isScrolled ? 'backdrop-blur-sm bg-white/80 dark:bg-gray-800/80' : 'bg-transparent'} transition-all duration-300`}
      >
        <div className="flex items-center justify-center flex-wrap p-2 gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveSection(item.id);
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-full flex items-center space-x-2 ${activeSection === item.id ? (theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-200') : (theme === 'light' ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-300 hover:bg-gray-700')} transition-colors duration-200`}
            >
              <span>{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingNav;

// import { motion } from 'framer-motion';
// import { 
//   HomeOutlined, 
//   UserOutlined, 
//   ExperimentOutlined, 
//   TranslationOutlined, 
//   MailOutlined 
// } from '@ant-design/icons';

// const FloatingNav = ({ activeSection, setActiveSection, theme, isScrolled }) => {
//   const navItems = [
//     { id: 'home', icon: <HomeOutlined />, label: 'Home' },
//     { id: 'about', icon: <UserOutlined />, label: 'About' },
//     { id: 'research', icon: <ExperimentOutlined />, label: 'Research' },
//     { id: 'medical', icon: <TranslationOutlined />, label: 'Medical' },
//     { id: 'contact', icon: <MailOutlined />, label: 'Contact' },
//   ];

//   return (

//     <div>

//     <motion.div 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 100 }}
//       className={`fixed top-4  transform -translate-x-1/2 z-50 w-1/2 rounded-full shadow-lg ${isScrolled ? 'backdrop-blur-sm bg-white/80 dark:bg-gray-800/80' : 'bg-transparent'} transition-all duration-300`}
//       >
//       <div className="flex items-center p-2 space-x-1">
//         {navItems.map((item) => (
//           <motion.button
//             key={item.id}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               setActiveSection(item.id);
//               document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
//             }}
//             className={`px-4 py-2 rounded-full flex items-center space-x-2 ${activeSection === item.id ? (theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-200') : (theme === 'light' ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-300 hover:bg-gray-700')} transition-colors duration-200`}
//           >
//             <span>{item.icon}</span>
//             <span className="hidden md:inline">{item.label}</span>
//           </motion.button>
//         ))}
//       </div>
//     </motion.div>
//     </div>
//   );
// };

// export default FloatingNav;