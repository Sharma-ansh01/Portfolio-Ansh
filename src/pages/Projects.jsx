import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ScrollToTop from '../components/ScrollToTop';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <>
      <ScrollToTop />
      
      <motion.div 
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="My Projects" 
            subtitle="Explore my recent work and personal projects" 
            centered
          />
          
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

// Project categories
const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Crop Yield Prediction', value: 'model' },
  { label: 'Web Apps', value: 'web' },
  { label: 'PowerBi', value: 'design' }
];

// Project data
const projects = [
  {
    title: "Crop Yield Prediction",
    description: "Developed a Machine Learning-based Crop Yield Prediction System using Random Forest and XGBoost (95.51% accuracy), with a Streamlit interface enabling farmers to get instant, data-driven yield predictions.",
    image: "https://media-hosting.imagekit.io/de03c16656694ff8/Screenshot%202025-04-28%20032504.png?Expires=1840610500&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wkALgTfyhG4luEzRRNI0bThaQNTay9xFCcya73BPTPdXJ1PLe0mfPw8xu3Srf1IpSFdOexDMUPnXpd2bKSVLy2QjrTutexla8fz~FPqh58CNjmeqHzJxs45m0lv7CeXZJf2PX22CxeFEGsUMU9lsb1h3hApECPdVuBc4gsYPOm70HT3PLsZYC0HEpWma86JQApyns6coSDzeJp8XIju7fXQ~bLmhf-n4pxvbRdCCpUM~ck7R4CTFc92JJwkIBm86gKQ8uzgZmHmDkHMo4lC~AZgCNbXk~cWR4ZLpAuKtet58j9byGRDNreP649YWp~CCtjKhF2kRoH965nI37Fnk9Q__",
    category: "model",
    technologies: ["Python", "XGBoost", "Random Forest", "Streamlit"],
    demoLink: "https://crop-yield-prediction-system-27hmwwjt6srgd4i5j6knng.streamlit.app/",
    codeLink: "https://github.com/Sharma-ansh01/Crop-Yield-Prediction-System"
  },
  {
    title: "Placement Analysis Dashboard",
    description: "A productivity tool to help teams organize and prioritize their projects.",
    image: "https://media-hosting.imagekit.io/e7099a9934524a69/Screenshot%202025-04-30%20141606.png?Expires=1840611242&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=T2OySyrz-cNqMm1zCRrfdktIxDHi-8LF8euUsHt9Ogs4a8czCDyEoICNBb0wCBtyHPPiIc2RsMatPtZwgy~iYpGxxoELJqOMuKaGwkdzu8Xs34ebosm9wR4PZnz7LKsCcCvLa3Dd7kJqczgCJqpta7UT4V5cn5Pa0VEl9KLDwZn694cai5AdPBTyxfXghpJTmPP9hwIE2G0ZD5whJ7TJnd0bzY3ndJq9ARvXHJlRp4QWvM7-8uMrNi-kXzqCHAFP4nrrgpx-gKPSO7H-cWlgeyaVWnHQow~moMpiTAdyhClgL9VRte6xW3MGj7SsKCJF1PL4dqPzs6yRA3FWHMPzjA__",
    category: "design",
    technologies: ["PowerBi", "Excel"],
    demoLink: "https://1drv.ms/u/c/5e05efeb77650ec0/Efvvaj4iyaFPstyALAJT8YMB-4mVbjQqX7hFlDuHA77FBA?e=bDKhZ0",
    codeLink: "https://github.com/Sharma-ansh01/Placement-Analysis-Dashboard"
  },
  {
    title: "Pha5e Replica",
    description: "Recreated the Hero section of the PHA5E website using HTML, Tailwind CSS, and GSAP, featuring responsive design, interactive hover effects, and smooth UI animations.",
    image: "https://media-hosting.imagekit.io/0db91a26ccb64c8c/Screenshot%202025-04-30%20151706.png?Expires=1840614441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ED5n6nhiYCLIRtC69FYhkZcAvcSXzd5y3znIEFqt-QFuizYV~0mNr19BjQUbw3XBxAbbe0q1lnJvULyIGdHusSrs4FxEX3sKZhbhdNj5F6ic5qFFG2ZaXxgDH0vN-1xyp-jnVuJnbripZ-~OwgoyIiuyelT-4z13NLZFvmoWtmDFKPiAQF3chYcUVf3kSl-7hZ4EM4ktP1ZAtgiSO9QZlzFDqlR621ZYsofIb0aarQw8U-wY0Ywkp9GtR3TVZh90EYyxrth2zw0XWrRMsMDz2J9jGtGYyg15JMFWQhi5JwMxqxmqqbm~XBRoslnZ6xxlkUCtsz7pqawZR-vMZ1UYRA__",
    category: "web",
    technologies: ["HTML", "Tailwind CSS", "GSAP"],
    demoLink: "https://pha5e-replica-assessment-codb.vercel.app/",
    codeLink: "https://github.com/Sharma-ansh01/Pha5e-Replica-assessment"
  },
  {
    title: "Restaurant Reservation System",
    description: "Developed a full-stack Restaurant Reservation System using React, Express, MongoDB, and JavaScript, featuring a user-friendly interface for booking tables, managing reservations, and streamlining restaurant operations.",
    image: "https://media-hosting.imagekit.io/d5b0b0eaeb3d4e12/Screenshot%202025-04-30%20155842.png?Expires=1840617563&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Vqi24dFG5wB~5btkgcPiIKxEPX71HcODO~Fq2gLFrUd1NSw7lMMyvRUVc7xD2Bo5NoAIvEdQkl002Oym19MwzQsF8rrUzmUoFKo9~bKx8JlgqzbL0eCQOA3UKPOSnElLGDCfd4YrYdYHbURHoMv9pYduK3sPrBb2OvkFZi9U4TZaOugEtcdWRMRT1km1OpSv03WAqNPoXrlqbZzLfd98GI9D9JrcUb~le4cYHTAAo0ztkVNJMZgkA2sSvcNRYzbJKkty~J52e7IMXKFo3ns9gD~eokhcGadiyismTduU~o~e9Y8qfgl3kNJQTr49sRCuvHCBRpbZxMrt2A73WFHAHA__",
    category: "web",
    technologies: ["React", "MongoDB", "Express", "JavaScript", "HTML", "CSS"],
    demoLink: "https://restaurant-reservation-system-alpha.vercel.app/",
    codeLink: "https://github.com/Sharma-ansh01/Restaurant-Reservation-System"
  },
  
];

export default Projects;