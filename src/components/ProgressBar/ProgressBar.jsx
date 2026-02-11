import { useState, useEffect } from 'react'
import "./ProgressBar.css"
const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const updateProgressBar = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollPercentage(scrolled)
    }

    window.addEventListener('scroll', updateProgressBar)
    return () => window.removeEventListener('scroll', updateProgressBar)
  }, [])

  return (
    <div className="progress-bar" id="progressBar" style={{ width: `${scrollPercentage}%` }}></div>
  )
}

export default ProgressBar