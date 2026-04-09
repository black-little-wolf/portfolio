import React from 'react'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gradient">
              John Doe
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Full-Stack Developer
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer