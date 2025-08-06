import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ExternalLink } from 'lucide-react';

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="aboutme" className="section-padding bg-white dark:bg-dark-900">
      <motion.div
        ref={ref}
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur-xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src={link}
                alt="Mohit Sharma"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                style={{ maxWidth: imgSize }}
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-500 rounded-full"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {message}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              variants={itemVariants}
            >
              <div className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-xl">
                <div className="text-3xl font-bold text-primary-600">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-xl">
                <div className="text-3xl font-bold text-secondary-600">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
              
              <motion.a
                href="https://www.upwork.com/freelancers/~015fbf717a50f7a5ae"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Upwork Profile
              </motion.a>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              className="mt-8"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind CSS'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
