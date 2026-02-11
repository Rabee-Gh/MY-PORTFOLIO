import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Education.css"

const Education = ({ data, isEnglish }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      delay: 100
    })
    
    AOS.refresh()
  }, [])

  return (
    <div className="education-timeline section">
      <div className="section-header">
        <span 
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isEnglish ? 'Learning path' : 'مسار التعلم'}
        </span>
        <h2 
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {isEnglish ? 'Education' : 'التعليم'}
        </h2>
        <p 
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isEnglish ? 'Academic background and professional certifications' : 'الخلفية الأكاديمية والشهادات المهنية'}
        </p>
      </div>
      
      <div 
        className="main-degree-card"
        data-aos="zoom-in-up"
        data-aos-delay="400"
        data-aos-duration="900"
        data-aos-easing="ease-out-back"
      >
        <div className="degree-icon-wrapper">
          <i className="fas fa-graduation-cap"></i>
          <div className="glowing-ring"></div>
        </div>
        
        <div className="degree-details">
          <div className="degree-badge">
            <span>🎓 {isEnglish ? 'Main Degree' : 'الشهادة الرئيسية'}</span>
          </div>
          <h3>{isEnglish ? data.education[0].degreeEn : data.education[0].degree}</h3>
          <p className="institution">{isEnglish ? data.education[0].institutionEn : data.education[0].institution}</p>
          
          <div className="timeline-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
            <span className="period">{data.education[0].periodEn}</span>
          </div>
        </div>
      </div>

      <div className="certificates-timeline">
        {data.education[0].certificates.map((cert, index) => (
          <div 
            key={index} 
            className="certificate-node"
            data-aos="fade-up"
            data-aos-delay={500 + (index * 150)}
            data-aos-duration="700"
            data-aos-easing="ease-out-cubic"
          >
            <div className="node-dot"></div>
            <div className="node-line"></div>
            
            <div className="certificate-card">
              <div className="cert-header">
                <div className="cert-icon" style={{background: index === 0 ? 'var(--gradient)' : 
                  index === 1 ? 'var(--gradient-accent)' : 'var(--success-color)'}}>
                  <i className={cert.icon}></i>
                </div>
                <div>
                  <h4>{isEnglish ? cert.nameEn : cert.name}</h4>
                  <p className="cert-meta">{isEnglish ? cert.issuerEn : cert.issuer} • {cert.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education