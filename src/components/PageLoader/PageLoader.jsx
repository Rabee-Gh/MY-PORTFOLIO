import { useEffect, useState } from 'react'
import "./PageLoader.css"

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      
      document.body.style.overflow = 'auto';
    }, 3500)
    
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto';
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className={`page-load ${!isVisible ? 'hidden' : ''}`} id="pageLoad">
      <div className="loader">
        <img 
          src='/logo3.png' 
          alt="Loading"
          loading="eager"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = 
              '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: var(--gradient); border-radius: 50%; color: white; font-weight: bold;">RG</div>';
          }}
        />
      </div>
    </div>
  )
}

export default PageLoader