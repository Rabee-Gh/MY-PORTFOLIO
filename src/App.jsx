import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Experience from './pages/Experience/Experience.jsx'
import Education from './pages/Education/Education.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Footer from './pages/Footer/Footer.jsx'
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground.jsx'
import BackToTop from './components/BackToTop/BackToTop.jsx'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import PageLoader from './components/PageLoader/PageLoader.jsx'
import { portfolioData } from './data/portfolioData.js'
import Hero from './pages/Hero/Hero.jsx'

// style
import './styles/index.css'
import './styles/theme.css'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isEnglish, setIsEnglish] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 800)

    // Set initial theme
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }

    // Set initial language
    if (isEnglish) {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    } else {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
    if (isEnglish) {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }

  const updateCurrentSection = (section) => {
    setCurrentSection(section)
  }

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <ProgressBar />
      <ParticlesBackground isDarkMode={isDarkMode} />
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      
      <Header 
        isDarkMode={isDarkMode}
        isEnglish={isEnglish}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        currentSection={currentSection}
        updateCurrentSection={updateCurrentSection}
      />
      

        {/* <Hero data={portfolioData} isEnglish={isEnglish} /> */}
        <Hero data={portfolioData} isEnglish={isEnglish}/>
        <About data={portfolioData} isEnglish={isEnglish} />
        <Projects data={portfolioData} isEnglish={isEnglish} />
        <Skills data={portfolioData} isEnglish={isEnglish} />
        <Experience data={portfolioData} isEnglish={isEnglish} />
        <Education data={portfolioData} isEnglish={isEnglish} />
        <Contact data={portfolioData} isEnglish={isEnglish} />

      
      <Footer data={portfolioData} isEnglish={isEnglish} />
      <BackToTop />
    </>
  )
}

export default App