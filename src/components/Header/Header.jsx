import { useState, useEffect } from 'react'
import {navLinks} from "../../data/portfolioData"
import './Header.css'

const Header = ({ isDarkMode, isEnglish, toggleTheme, toggleLanguage, currentSection, updateCurrentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    updateCurrentSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
          <img src='/logo2.png' className='logo-image'/>
        </a>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="navLinks">
          {navLinks.map((link, index) => (
            <li key={link.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <a 
                href={`#${link.id}`} 
                className={`nav-link ${currentSection === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {isEnglish ? link.labelEn : link.labelAr}
              </a>
            </li>
          ))}
          
          <div className="nav-controls-mobile" style={{ animationDelay: `${navLinks.length * 0.1 + 0.1}s` }}>
            <button className="toggle-btn lang-toggle" id="langToggle" onClick={toggleLanguage} title={isEnglish ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}>
              <i className="fas fa-language"></i>
            </button>
            <button className="toggle-btn" id="themeToggle" onClick={toggleTheme} title={isDarkMode ? (isEnglish ? 'Switch to Light Mode' : 'التبديل إلى الوضع الفاتح') : (isEnglish ? 'Switch to Dark Mode' : 'التبديل إلى الوضع الداكن')}>
              <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </div>
        </ul>
        
        <div className="nav-controls">
          <button className="toggle-btn lang-toggle" id="langToggle" onClick={toggleLanguage} title={isEnglish ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}>
            <i className="fas fa-language"></i>
          </button>
          <button className="toggle-btn" id="themeToggle" onClick={toggleTheme} title={isDarkMode ? (isEnglish ? 'Switch to Light Mode' : 'التبديل إلى الوضع الفاتح') : (isEnglish ? 'Switch to Dark Mode' : 'التبديل إلى الوضع الداكن')}>
            <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>

        <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
    </header>
  )
}

export default Header