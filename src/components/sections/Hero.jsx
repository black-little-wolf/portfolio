import React from 'react'
import { motion } from 'framer-motion'
import Button from '../common/Button.jsx'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium text-lg mb-2">
              Hello, I'm John Doe
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Full-Stack Developer
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
              I create beautiful, responsive websites and web applications with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large">
                View My Work
              </Button>
              <Button variant="secondary" size="large">
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <a 
              href="#about" 
              className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <span className="mb-2 text-sm">Scroll Down</span>
              <i className="fas fa-chevron-down animate-bounce"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero