import React, { useState } from 'react'

const FormInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  error, 
  placeholder, 
  className = '', 
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 rounded-md border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-primary'} ${isFocused ? 'ring-2 ring-primary' : ''} ${type === 'textarea' ? 'resize-none min-h-[120px]' : ''}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

// Textarea component for convenience
const Textarea = ({ label, name, value, onChange, error, placeholder, className = '', ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 rounded-md border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-primary'} ${isFocused ? 'ring-2 ring-primary' : ''} resize-none min-h-[120px]`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
};

export { Textarea };
export default FormInput