import { motion } from 'framer-motion';
import { Divider, Tag, Avatar, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import medicalResume from "../assets/HongyueZhan_Mandarin_Resume.docx.pdf";
import labResume from "../assets/LabTech_HongyueZhan_resume.docx.pdf";

const AboutSection = ({ theme, skills }) => {
  // Resume files data
  const resumeFiles = [
    {
      name: "Medical Translation Resume",
      type: "medical",
      description: "Focuses on medical translation and leadership experience",
      file: medicalResume
    },
    {
      name: "Lab Technician Resume",
      type: "lab",
      description: "Highlights laboratory research and technical skills",
      file: labResume
    }
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          About Me
        </h2>
        <Divider className={`${theme === 'light' ? 'bg-blue-500' : 'bg-blue-400'} h-1 w-20 mx-auto`} />
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mt-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          I'm a Biological Sciences graduate from UC Irvine with a passion for both laboratory research and medical communication, particularly in Mandarin-English translation.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-semibold mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
            Education
          </h3>
          <div className={`p-6 rounded-xl ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-lg'}`}>
            <div className="flex items-start">
              <div className={`p-3 rounded-lg ${theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-200'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className={`text-xl font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                  University of California, Irvine
                </h4>
                <p className={`mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  Bachelor of Sciences, Biological Sciences
                </p>
                <p className={`mt-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                  June 2025
                </p>
              </div>
            </div>
          </div>

          {/* Resume Download Section */}
          <h3 className={`text-2xl font-semibold mt-12 mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
            Download Resumes
          </h3>
          <div className={`p-6 rounded-xl ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-lg'}`}>
            <div className="space-y-4">
              {resumeFiles.map((resume, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'}`}
                >
                  <h4 className={`font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    {resume.name}
                  </h4>
                  <p className={`text-sm mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                    {resume.description}
                  </p>
                  <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    href={resume.file}
                    download={`HongyueZhan_${resume.type}_Resume.pdf`}
                    className={`mt-3 ${theme === 'light' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-600'}`}
                  >
                    Download {resume.type === 'medical' ? 'Medical' : 'Lab Tech'} Resume
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-semibold mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
            Skills
          </h3>
          <div className={`p-6 rounded-xl ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gray-800 shadow-lg'}`}>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className={`text-lg font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skill.items.map((item, i) => (
                    <Tag 
                      key={i} 
                      color={theme === 'light' ? 'blue' : 'geekblue'}
                      className="text-sm py-1 px-3 rounded-full"
                    >
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;