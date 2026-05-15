import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Projects.css"

const INITIAL_COUNT = 6

const Projects = ({ data, isEnglish }) => {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? data.projects : data.projects.slice(0, INITIAL_COUNT)
  const hasMore = data.projects.length > INITIAL_COUNT

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      delay: 100
    })
    AOS.refresh()
  }, [])

  // Refresh AOS when new cards appear
  useEffect(() => {
    AOS.refresh()
  }, [showAll])

  const handleToggle = () => {
    if (showAll) {
      // Scroll back to projects section when collapsing
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setShowAll(prev => !prev)
  }

  return (
    <div id="projects">
      <div className="section-header">
        <span
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isEnglish ? 'My work' : 'أعمالي'}
        </span>
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {isEnglish ? 'Featured Projects' : 'المشاريع المميزة'}
        </h2>
        <p
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isEnglish
            ? 'A selection of my recent web development projects showcasing my skills and expertise'
            : 'مجموعة مختارة من مشاريع تطوير الويب الحديثة التي تعرض مهاراتي وخبراتي'}
        </p>
      </div>

      <div className="projects-grid section pt-spicial">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className="glass-project-card"
            data-aos="fade-up"
            data-aos-delay={index < INITIAL_COUNT ? 400 + (index % 3) * 100 : (index % 3) * 100}
            data-aos-duration="700"
            data-aos-easing="ease-out-cubic"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="project-card-header">
              <div className="project-icon-badge">
                <i className={project.icon}></i>
              </div>
              <div className="project-meta">
                <span className="project-id">#{String(project.id).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="project-card-body">
              <h3 className="project-title">
                {isEnglish ? project.titleEn : project.title}
              </h3>

              <p className="project-description">
                {isEnglish ? project.descriptionEn : project.description}
              </p>

              <div className="tech-stack">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-pill more">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>

            <div className="project-card-footer">
              <div className="project-links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="link-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>{isEnglish ? 'Live' : 'مباشر'}</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="link-btn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                    <span>Code</span>
                  </a>
                )}
              </div>

              <div className="project-stats">
                <span className="stat">
                  <i className="fas fa-layer-group"></i>
                  {project.technologies.length} tech
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {hasMore && (
        <div className="projects-toggle-wrapper" data-aos="fade-up" data-aos-delay="200">
          <button className="projects-toggle-btn" onClick={handleToggle}>
            {showAll ? (
              <>
                <i className="fas fa-chevron-up"></i>
                <span>{isEnglish ? 'Show Less' : 'عرض أقل'}</span>
              </>
            ) : (
              <>
                <span>{isEnglish ? 'Show More projects' : 'عرض المزيد من المشاريع'}</span>
                {/* <span className="toggle-count">
                  +{data.projects.length - INITIAL_COUNT}
                </span> */}
                <i className="fas fa-chevron-down"></i>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default Projects
