import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle.jsx'
import Card from '../common/Card.jsx'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company Inc.',
      period: 'Jan 2022 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 5 developers and implemented agile methodologies.',
      achievements: [
        'Implemented a new user authentication system that reduced login time by 40%',
        'Optimized database queries, improving application performance by 30%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'Startup Company',
      period: 'Mar 2020 - Dec 2021',
      description: 'Built and maintained web applications using React, Express, and PostgreSQL. Collaborated with designers and product managers to deliver high-quality products.',
      achievements: [
        'Developed a real-time chat application using Socket.io',
        'Implemented a payment processing system using Stripe API',
        'Created a responsive design that works on all devices'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Technology',
      period: 'Sep 2016 - Jun 2020',
      description: 'Studied computer science with a focus on web development and software engineering.',
      achievements: [
        'Graduated with honors',
        'Completed a senior project on machine learning for web applications',
        'Participated in hackathons and coding competitions'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionTitle title="My Experience" subtitle="Work & Education" />
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
              >
                {/* Timeline Dot */}
                <div className="timeline-item absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2"></div>
                
                {/* Content */}
                <Card className={`w-full md:w-[45%] p-6 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="flex items-center mb-2">
                    <i className={`fas ${experience.type === 'work' ? 'fa-briefcase' : 'fa-graduation-cap'} text-primary mr-2`}></i>
                    <span className="text-sm font-medium text-primary">
                      {experience.type === 'work' ? 'Work Experience' : 'Education'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {experience.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {experience.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                        <span className="text-gray-600 dark:text-gray-400">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience