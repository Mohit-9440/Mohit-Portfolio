import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';

const MainBody = React.forwardRef(({ gradient, title, message, icons }, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'fa-github':
        return <Github className="w-6 h-6" />;
      case 'fa-linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'fa-instagram':
        return <Instagram className="w-6 h-6" />;
      case 'fa-envelope':
        return <Mail className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradient})`,
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-xl"
          animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1 
          ref={ref}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">{title}</span>
        </motion.h1>

        {/* Typing animation for message */}
        <motion.div 
          className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 font-light"
          variants={itemVariants}
        >
          <TypewriterText text={message} />
        </motion.div>

        {/* Social icons */}
        <motion.div 
          className="flex justify-center items-center space-x-6 mb-12"
          variants={itemVariants}
        >
          {icons.map((icon, index) => (
            <motion.a
              key={`social-icon-${index}`}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-white group-hover:text-primary-300 transition-colors duration-300">
                {getIconComponent(icon.image)}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#aboutme"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.a>
          
          <motion.a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get In Touch</span>
            <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
});

// Simple typewriter effect component
const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

export default MainBody;
