import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle.jsx'
import Card from '../common/Card.jsx'

const About = () => {
  const features = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Creating responsive and interactive websites using modern technologies.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile-First Design',
      description: 'Designing websites that work seamlessly on all devices.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Creating beautiful and user-friendly interfaces.'
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle title="About Me" subtitle="Who I Am" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm a Full-Stack Developer with over 5 years of experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I specialize in creating modern, responsive websites and web applications using React, Node.js, and other modern technologies. I have a passion for clean code and user-friendly design.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Throughout my career, I've worked with clients from various industries, helping them achieve their digital goals through innovative and effective solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-2"></i>
                <span>React & Vue.js</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-2"></i>
                <span>Node.js & Express</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-2"></i>
                <span>JavaScript & TypeScript</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-2"></i>
                <span>HTML & CSS</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-2"></i>
                <span>SQL & NoSQL Databases</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-primary mr-2"></i>
                <span>Git & DevOps</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="text-primary text-2xl mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About