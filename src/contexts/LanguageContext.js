import React, { createContext, useState, useContext, useEffect } from 'react'
import translations from '../translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(navigator.language.split('-')[0])
  console.log(navigator.language)

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
