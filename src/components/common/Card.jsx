import React from 'react'

const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'bg-white dark:bg-dark-card rounded-lg shadow-card overflow-hidden'
  const hoverClasses = hover ? 'card-hover' : ''

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card