import { motion } from 'framer-motion';
import { Divider, Timeline } from 'antd';
import ExperienceCard from './ExperienceCard';

const MedicalSection = ({ theme, experiences }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section id="medical" className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme === 'light' ? 'text-gray-800' : 'text-gray-600'}`}>
            Medical Translation & Leadership
          </h2>
          <Divider className={`${theme === 'light' ? 'bg-blue-500' : 'bg-blue-400'} h-1 w-20 mx-auto`} />
          <p className={`text-base sm:text-lg max-w-2xl mx-auto mt-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
            Bridging healthcare gaps through Mandarin-English translation and community leadership.
          </p>
        </motion.div>

        <div className="w-full">
          <Timeline
            mode={isMobile ? 'left' : 'alternate'}
            items={experiences.map((exp, index) => ({
              children: (
                <div className="w-full sm:w-[90%]">
                  <ExperienceCard experience={exp} theme={theme} index={index} />
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default MedicalSection;
