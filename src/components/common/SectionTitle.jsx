import React from 'react'
import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div 
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <p className="text-primary font-medium mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto"></div>
    </motion.div>
  )
}

export default SectionTitle