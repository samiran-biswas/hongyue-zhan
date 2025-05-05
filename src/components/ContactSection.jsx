import { motion } from 'framer-motion';
import { Divider, message } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, FileTextOutlined } from '@ant-design/icons';
import { useState } from 'react';

const ContactSection = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message: msg } = formData;

    if (!name || !email || !msg) {
      message.error('Please fill all fields');
      return;
    }

    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${msg}`;
    
    window.location.href = `mailto:zhan.hongyue.connie@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    message.success('Opening your email client...');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-gray-600'}`}>
            Get In Touch
          </h2>
          <Divider className={`${theme === 'light' ? 'bg-blue-500' : 'bg-blue-400'} h-1 w-20 mx-auto`} />
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            I'm currently looking for new opportunities in biological research or medical translation. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`p-6 sm:p-8 rounded-xl ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-700 shadow-xl'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h3 className={`text-xl sm:text-2xl font-semibold mb-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-200'}`}>
                    <MailOutlined className="text-lg sm:text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className={`font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>Email</h4>
                    <a 
                      href="mailto:zhan.hongyue.connie@gmail.com" 
                      className={`${theme === 'light' ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-blue-300'} text-sm sm:text-base`}
                    >
                      zhan.hongyue.connie@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-200'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className={`font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>Phone</h4>
                    <a 
                      href="tel:+18054419571" 
                      className={`${theme === 'light' ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-blue-300'} text-sm sm:text-base`}
                    >
                      +1 (805) 441-9571
                    </a>
                  </div>
                </div>

                {/* Visa */}
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg ${theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-200'}`}>
                    <FileTextOutlined className="text-lg sm:text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className={`font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>Visa Status</h4>
                    <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm sm:text-base`}>
                      F-1 visa holder, OPT Candidate
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h4 className={`font-medium mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    href="https://www.linkedin.com/in/hongyue-zhan-connie/"
                    className={`p-3 rounded-full ${theme === 'light' ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-600 hover:bg-gray-500'} text-xl`}
                  >
                    <LinkedinOutlined className={`${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h3 className={`text-xl sm:text-2xl font-semibold mb-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {['name', 'email', 'message'].map((field, idx) => (
                  <div key={idx}>
                    <label htmlFor={field} className={`block mb-1 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
                      Your {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border text-sm sm:text-base ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-gray-600 border-gray-500'} focus:outline-none focus:ring-1 ${theme === 'light' ? 'focus:ring-blue-500' : 'focus:ring-blue-400'}`}
                        placeholder={`Enter your ${field}`}
                        required
                      />
                    ) : (
                      <textarea
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border text-sm sm:text-base ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-gray-600 border-gray-500'} focus:outline-none focus:ring-1 ${theme === 'light' ? 'focus:ring-blue-500' : 'focus:ring-blue-400'}`}
                        placeholder="Enter your message"
                        required
                      ></textarea>
                    )}
                  </div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full py-3 rounded-lg font-medium ${theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-700 text-white hover:bg-blue-600'}`}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
