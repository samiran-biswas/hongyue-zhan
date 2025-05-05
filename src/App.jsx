import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatButton, Tag } from 'antd';
import { FiChevronUp } from 'react-icons/fi';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResearchSection from './components/ResearchSection';
import MedicalSection from './components/MedicalSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'research', 'medical', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const experiences = [
    {
      title: "Head of Mandarin Department",
      company: "Medical Equality Operative",
      period: "Dec 2024 - Present",
      points: [
        "Develop and oversee medical interpretation training for Mandarin-speaking students",
        "Create and translate 5+ medical case studies focusing on conditions like diabetes, hyperlipidemia, and hypertension",
        "Train students on Mandarin medical terminology pronunciation for healthcare settings"
      ]
    },
    {
      title: "Medical Translator (Mandarin)",
      company: "Defeating Epilepsy Foundation",
      period: "Jun 2022 - Present",
      points: [
        "Translate 70+ medical documents and ensure accuracy of the translation",
        "Review medical terminology content and add clarity for Mandarin-speaking epilepsy patients",
        "Voice-record and translate pharmaceutical guidelines for Mandarin-speaking audiences"
      ]
    },
    {
      title: "Chapter President",
      company: "Global Medical Brigades",
      period: "Jun 2024 - Present",
      points: [
        "Lead a 110-member team in organizing 10+ healthcare events, increasing membership by 50%",
        "Provide training and guidance to members on healthcare initiatives and patient education"
      ]
    }
  ];

  const researchExperiences = [
    {
      title: "Undergraduate Researcher",
      company: "Siryaporn Lab",
      period: "Mar 2024 - Present",
      points: [
        "Analyze data on bacterial resistance studies",
        "Prepare solutions for bacterial studies following SOPs and PPE",
        "Aliquot chemicals for laboratory use",
        "Awarded $300+ from UROP for research contributions"
      ]
    },
    {
      title: "Laboratory Student",
      company: "Experimental Microbiology Lab Course",
      period: "Dec 2024 - Mar 2025",
      points: [
        "Centrifuged samples for electrophoresis experiments",
        "Led pH and optical density testing in fermentation tests",
        "Experienced fast-paced lab environment by processing multiple samples with accuracy"
      ]
    },
    {
      title: "Laboratory Student",
      company: "Molecular Biology Lab Course",
      period: "Sep 2024 - Dec 2024",
      points: [
        "Prepared and processed oral specimens for bacterial testing",
        "Cloned VNTR regions into plasmids and analyzed results for genetic variation",
        "Maintained detailed lab records and followed laboratory practice in long hours"
      ]
    }
  ];

  const skills = [
    { category: "Laboratory", items: ["Specimen preparation", "Aliquoting", "Centrifugation", "Solution prep", "PCR", "Gel electrophoresis", "Gram staining", "Microscopy"] },
    { category: "Computer", items: ["Microsoft Office", "Google Workspace", "Canva", "MS Outlook", "Excel", "Word"] },
    { category: "Language", items: ["Fluent English", "Native Mandarin", "Conversational Japanese"] }
  ];

  return (
    <div className={` min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} transition-colors duration-300`}>
     
     <div>

      <FloatingNav 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        theme={theme} 
        isScrolled={isScrolled} 
      />
     </div>

      <HeroSection theme={theme} />
      <AboutSection theme={theme} skills={skills} />
      <ResearchSection theme={theme} researchExperiences={researchExperiences} />
      <MedicalSection theme={theme} experiences={experiences} />
      <ContactSection theme={theme} />
      <Footer theme={theme} />

      {/* Theme Toggle and Back to Top */}
      <FloatButton.Group shape="square" className="right-6 bottom-6">
        <FloatButton 
          icon={theme === 'light' ? <span>🌙</span> : <span>☀️</span>}
          onClick={toggleTheme}
          tooltip="Toggle theme"
        />
        <FloatButton.BackTop 
          icon={<FiChevronUp />} 
          visibilityHeight={300}
        />
      </FloatButton.Group>
    </div>
  );
};

export default App;
