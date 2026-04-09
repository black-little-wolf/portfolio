import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle.jsx'
import Card from '../common/Card.jsx'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 & Tailwind CSS', level: 90 },
        { name: 'JavaScript & TypeScript', level: 85 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'MySQL', level: 65 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'GraphQL', level: 60 }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Webpack & Vite', level: 80 },
        { name: 'Docker', level: 65 },
        { name: 'CI/CD', level: 60 },
        { name: 'AWS', level: 55 },
        { name: 'Linux', level: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionTitle title="My Skills" subtitle="What I Can Do" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6">
              <h3 className="text-xl font-bold mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.1 * (categoryIndex * 6 + skillIndex) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills