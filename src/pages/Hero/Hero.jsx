import "./Hero.css"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = ({ data, isEnglish }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100
    })
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div
          className="hero-badge"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <i className={isEnglish ? "fas fa-rocket" : "fas fa-rocket arm"}></i>
          <span >{isEnglish ? (data.personalInfo?.titleEn || 'Full Stack Developer') : (data.personalInfo?.title || 'مطور ويب ')}</span>
        </div>

        <h2
          className="hero-subtitle"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isEnglish
            ? <>From concept to completion<br />I transform dreams into success stories</>
            : <>من المفهوم إلى الاكتمال<br />أحول الأحلام إلى قصص نجاح</>}
        </h2>

        <p
          className="hero-description"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {isEnglish
            ? 'Passionate Full Stack Developer specializing in modern web technologies. I create fast, responsive, and user-friendly web applications with clean code and innovative solutions.'
            : 'مطور ويب  شغوف متخصص في تقنيات الويب الحديثة. أصنع تطبيقات ويب سريعة، متجاوبة وسهلة الاستخدام مع كود نظيف وحلول مبتكرة.'}
        </p>

        <div
          className="hero-buttons"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            // href="https://drive.google.com/file/d/1LJx5u6zCPOVwz6SMoXB6RhRZHNcUuLD9/view?usp=sharing"
            href="https://drive.google.com/file/d/1AJzAwPiojQtGYvOTaKFza7RsKHNxksH8/view?usp=sharing"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{isEnglish ? 'VIEW MY RESUME' : 'عرض سيرتي الذاتية'}</span>
            <i className="fas fa-file-alt btn-icon"></i>
          </a>

          <a href="#contact" className="btn btn-secondary">
            <span>{isEnglish ? 'GET IN TOUCH' : 'تواصل معي'}</span>
            <i className="fas fa-paper-plane btn-icon"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div
          className="profile-image-container"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <div className="profile-placeholder">
            <img src='/fme.jpg' alt='RG' width="104%" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero