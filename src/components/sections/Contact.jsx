import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle.jsx'
import FormInput, { Textarea } from '../common/FormInput.jsx'
import Button from '../common/Button.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: '#', color: '#333333' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#', color: '#0077B5' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#', color: '#1DA1F2' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#', color: '#E4405F' }
  ]

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle title="Contact Me" subtitle="Get In Touch" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your name"
              />
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Your email"
              />
              <FormInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="Subject"
              />
              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Your message"
              />
              <Button type="submit" variant="primary" isLoading={isSubmitting} className="w-full">
                Send Message
              </Button>
              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary text-2xl mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Main Street, City, Country
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary text-2xl mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    john.doe@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary text-2xl mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    +1 (123) 456-7890
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: link.color + '20', color: link.color }}
                      aria-label={link.name}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact