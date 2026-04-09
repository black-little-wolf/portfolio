import React, { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : false
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode))
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}