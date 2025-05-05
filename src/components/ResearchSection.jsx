import { motion } from 'framer-motion';
import { Divider, Timeline } from 'antd';
import ExperienceCard from './ExperienceCard';

const ResearchSection = ({ theme, researchExperiences }) => {
  return (
    <section id="research" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-800'}`}>
            Laboratory Research
          </h2>
          <Divider className={`${theme === 'light' ? 'bg-blue-500' : 'bg-blue-400'} h-1 w-20 mx-auto`} />
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mt-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-500'}`}>
            Hands-on experience in microbiology and molecular biology research with a focus on bacterial resistance.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-1 gap-8">
          <Timeline
            mode="alternate"
            items={researchExperiences.map((exp, index) => ({
              children: <ExperienceCard experience={exp} theme={theme} index={index} />,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;