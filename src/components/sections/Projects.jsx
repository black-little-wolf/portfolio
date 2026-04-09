import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../common/SectionTitle.jsx'
import Card from '../common/Card.jsx'
import Button from '../common/Button.jsx'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce website built with React, Redux, and Node.js. Features include product listing, shopping cart, and checkout process.',
      category: 'web',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20website%20interface&image_size=landscape_16_9',
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS. Features include responsive design, dark mode, and smooth animations.',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personal%20portfolio%20website%20design&image_size=landscape_16_9',
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application built with Vue.js and Firebase. Features include task creation, prioritization, and deadline tracking.',
      category: 'app',
      technologies: ['Vue.js', 'Firebase', 'Vuetify'],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=task%20management%20app%20interface&image_size=landscape_16_9',
      link: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather application built with React and OpenWeather API. Features include current weather, forecast, and location search.',
      category: 'app',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=weather%20app%20interface%20with%20current%20weather%20and%20forecast&image_size=landscape_16_9',
      link: '#'
    },
    {
      id: 5,
      title: 'Blog Website',
      description: 'A blog website built with Next.js and Markdown. Features include markdown parsing, syntax highlighting, and responsive design.',
      category: 'web',
      technologies: ['Next.js', 'Markdown', 'Tailwind CSS'],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20blog%20website%20design&image_size=landscape_16_9',
      link: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'A real-time chat application built with React and Socket.io. Features include real-time messaging, user authentication, and online status.',
      category: 'app',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=real-time%20chat%20application%20interface&image_size=landscape_16_9',
      link: '#'
    }
  ]

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'App', value: 'app' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle title="My Projects" subtitle="What I've Built" />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeFilter === category.value ? 'primary' : 'outline'}
              onClick={() => setActiveFilter(category.value)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card onClick={() => openModal(project)} className="cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <Button variant="text" size="small" className="w-full">
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/80 dark:bg-dark-card/80 rounded-full p-2 hover:bg-white dark:hover:bg-dark-card transition-colors"
                  aria-label="Close modal"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedProject.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="primary" onClick={() => window.open(selectedProject.link, '_blank')}>
                    Live Demo
                  </Button>
                  <Button variant="secondary" onClick={() => window.open(selectedProject.link, '_blank')}>
                    GitHub Repo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects