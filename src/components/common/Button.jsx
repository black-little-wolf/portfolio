import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  isLoading = false, 
  onClick, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'font-medium transition-all duration-300 active:scale-95 rounded-md'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-700 hover:shadow-lg hover:scale-105',
    secondary: 'bg-white dark:bg-dark-card text-primary border border-primary hover:bg-primary/5',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary/5',
    text: 'bg-transparent text-primary hover:bg-primary/5'
  }
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button