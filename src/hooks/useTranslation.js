import { useLanguage } from 'contexts/LanguageContext'

const useTranslation = () => {
  const { language, translations } = useLanguage()

  const t = (key) => {
    return translations[language][key] || key
  }

  return t
}

export default useTranslation
