import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Experience.css"

const Experience = ({ data, isEnglish }) => {
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
    <section id="experience" className="section">
      <div className="section-header mb-spicial">
        <span
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isEnglish ? 'My journey' : 'رحلتي'}
        </span>
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {isEnglish ? 'Experience' : 'الخبرات'}
        </h2>
        <p
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isEnglish ? 'Professional journey and work experience' : 'الرحلة المهنية والخبرات العملية'}
        </p>
      </div>

      <div className="experience-timeline" id="timeline">
        {data.experience.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? '' : 'even'}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={300 + (index * 150)}
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-date">
                {isEnglish ? exp.dateEn : exp.date}
              </span>
              <h3 className="timeline-title">
                {isEnglish ? exp.titleEn : exp.title}
              </h3>
              <p className="timeline-company">
                <i className="fas fa-building"></i>
                <span>{isEnglish ? exp.companyEn : exp.company}</span>
                <span className="timeline-location"> ({isEnglish ? exp.locationEn : exp.location})</span>
              </p>
              <p className="timeline-description">
                {isEnglish ? exp.descriptionEn : exp.description}
              </p>
              {exp.recommendationUrl && (
                <a
                  href={exp.recommendationUrl}
                  className="recommendation-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-certificate"></i>
                  <span>{isEnglish ? 'View Recommendation' : 'عرض التوصية'}</span>
                  <i className="fas fa-external-link-alt recommendation-link-icon"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience