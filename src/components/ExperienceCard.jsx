import { motion } from 'framer-motion';
import { Card } from 'antd';

const ExperienceCard = ({ experience, theme, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card 
        className={`${theme === 'light' ? 'bg-white' : 'bg-gray-700'} shadow-md`}
        hoverable
      >
        <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          {experience.title}
        </h3>
        <p className={`mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          {experience.company} • {experience.period}
        </p>
        <ul className="mt-4 space-y-2">
          {experience.points.map((point, i) => (
            <li key={i} className={`flex items-start ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              <span className="inline-block mr-2 mt-1">
                <svg className={`w-4 h-4 ${theme === 'light' ? 'text-blue-500' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;