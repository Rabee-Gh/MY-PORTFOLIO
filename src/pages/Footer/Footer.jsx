import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Footer.css"

const Footer = ({ data, isEnglish }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      delay: 100
    })
  }, [])

  return (
    <footer className="simple-footer">
      <div className="footer-content">
        <div
          className="footer-quote"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <h3>
            {isEnglish
              ? "Where clean code meets exceptional user experience."
              : "حيث يلتقي الكود النظيف بتجربة المستخدم الاستثنائية."
            }
          </h3>
          <p className="quote-author">
            — {isEnglish ? data.personalInfo.nameEn : data.personalInfo.name}
          </p>
        </div>

        <div
          className="social-icons"
        >
          <a href="https://www.facebook.com/share/17vtfifLUB/" className="social-icon" target="_blank" rel="noopener noreferrer" title='Facebook'>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/rabee_gh?igsh=dTZvNHVpcjMyaDdq" className="social-icon" target="_blank" rel="noopener noreferrer" title='Instagram'>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/963997037470" className="social-icon" target="_blank" rel="noopener noreferrer" title='Whatsapp'>
            <i className="fab fa-whatsapp"></i>
          </a>
          {/* <a href="https://github.com/Rabee-Gh" className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a> */}
          <a href={data.personalInfo.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div
          className="copyright"
        >
          <p>
            © {new Date().getFullYear()} {isEnglish ? data.personalInfo.nameEn : data.personalInfo.name}.
            {isEnglish ? ' All rights reserved.' : ' جميع الحقوق محفوظة.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer