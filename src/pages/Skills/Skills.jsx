import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Skills.css"

const Skills = ({ data, isEnglish }) => {
  const [activeTab, setActiveTab] = useState('frontend')
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      delay: 100
    })
    
    AOS.refresh()
  }, [activeTab])

  const tabs = [
    { id: 'frontend', icon: 'fas fa-code', labelEn: 'Frontend', labelAr: 'الواجهة الأمامية' },
    { id: 'backend', icon: 'fas fa-server', labelEn: 'Backend', labelAr: 'الواجهة الخلفية' },
    { id: 'tools', icon: 'fas fa-tools', labelEn: 'Tools', labelAr: 'الأدوات' }
  ]

  const currentSkills = data.skills[activeTab]

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span 
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isEnglish ? 'What I know' : 'ما أعرفه'}
        </span>
        <h2 
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {isEnglish ? 'My Skills' : 'مهاراتي'}
        </h2>
        <p 
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isEnglish ? 'Technologies, tools and frameworks I work with' : 'التقنيات، الأدوات والأطر التي أعمل بها'}
        </p>
      </div>
      
      {/* Skills Tabs */}
      <div 
        className="skills-tabs"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {tabs.map((tab, index) => (
          <button 
            key={tab.id}
            className={`skill-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            data-aos="zoom-in"
            data-aos-delay={500 + (index * 100)}
            data-aos-duration="600"
          >
            <i className={tab.icon}></i>
            <span>{isEnglish ? tab.labelEn : tab.labelAr}</span>
          </button>
        ))}
      </div>
      
      {/* Skills Grids */}
      <div className="skills-grid-container" id="skillsContainer">
        {/* Frontend Skills Grid */}
        <div className={`skills-grid ${activeTab === 'frontend' ? 'active' : ''}`} id="frontendGrid">
          {data.skills.frontend.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card-small"
              data-aos="fade-up"
              data-aos-delay={100 + (index % 4) * 100}
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
            >
              <div className="skill-icon-wrapper">
                <i className={skill.icon}></i>
              </div>
              <h4>{isEnglish ? skill.nameEn : skill.name}</h4>
              <p className="skill-description">
                {isEnglish ? skill.descriptionEn : skill.description}
              </p>
              <span className="skill-level">
                {isEnglish ? skill.levelEn : skill.level}
              </span>
            </div>
          ))}
        </div>
        
        {/* Backend Skills Grid */}
        <div className={`skills-grid ${activeTab === 'backend' ? 'active' : ''}`} id="backendGrid">
          {data.skills.backend.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card-small"
              data-aos="fade-up"
              data-aos-delay={100 + (index % 4) * 100}
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
            >
              <div className="skill-icon-wrapper">
                <i className={skill.icon}></i>
              </div>
              <h4>{isEnglish ? skill.nameEn : skill.name}</h4>
              <p className="skill-description">
                {isEnglish ? skill.descriptionEn : skill.description}
              </p>
              <span className="skill-level">
                {isEnglish ? skill.levelEn : skill.level}
              </span>
            </div>
          ))}
        </div>
        
        {/* Tools Skills Grid */}
        <div className={`skills-grid ${activeTab === 'tools' ? 'active' : ''}`} id="toolsGrid">
          {data.skills.tools.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card-small"
              data-aos="fade-up"
              data-aos-delay={100 + (index % 4) * 100}
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
            >
              <div className="skill-icon-wrapper">
                <i className={skill.icon}></i>
              </div>
              <h4>{isEnglish ? skill.nameEn : skill.name}</h4>
              <p className="skill-description">
                {isEnglish ? skill.descriptionEn : skill.description}
              </p>
              <span className="skill-level">
                {isEnglish ? skill.levelEn : skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills