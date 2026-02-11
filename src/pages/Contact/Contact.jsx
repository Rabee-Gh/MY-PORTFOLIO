import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Contact.css"

const Contact = ({ data, isEnglish }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)
  
  const ACCESS_KEY = '2ce7366d-24e9-423f-8771-8a87ba2017b6'
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      delay: 100
    })
    
    AOS.refresh()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Website',
          botcheck: '' 
        })
      })

      const result = await response.json()

      if (result.success) {
        showNotification(
          isEnglish 
            ? 'Message sent successfully!' 
            : 'تم إرسال الرسالة بنجاح!',
          'success'
        )
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        console.error('Web3Forms error:', result)
        throw new Error(result.message || 'Failed to send')
      }
      
    } catch (error) {
      console.error('Submission error:', error)
      showNotification(
        isEnglish 
          ? 'Failed to send message. Please try again.' 
          : 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
        'error'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span 
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isEnglish ? "Let's talk" : 'لنتحدث'}
        </span>
        <h2 
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {isEnglish ? 'Contact Me' : 'تواصل معي'}
        </h2>
        <p 
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isEnglish ? 'Feel free to reach out for collaborations or just to say hello' : 'لا تتردد في التواصل للتعاون أو مجرد التحية'}
        </p>
      </div>
      
      <div className="contact-container">
        <div 
          className="contact-info"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="700"
        >
          <div 
            className="contact-item"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-details">
              <h4>{isEnglish ? 'Location' : 'الموقع'}</h4>
              <p>{isEnglish ? 'Swaida, Syria' : 'السويداء، سوريا'}</p>
            </div>
          </div>
          
          <div 
            className="contact-item"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>{data.personalInfo.email}</p>
            </div>
          </div>
          
          <div 
            className="contact-item"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="600"
          >
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-details">
              <h4>{isEnglish ? 'Phone' : 'الهاتف'}</h4>
              <p>{data.personalInfo.phone}</p>
            </div>
          </div>
          
          <div 
            className="social-links"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="500"
          >
            <a href={data.personalInfo.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${data.personalInfo.email}`} className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://wa.me/963997037470" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
        <div 
          className="contact-form"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="700"
        >
          <h3>{isEnglish ? 'Send a Message' : 'أرسل رسالة'}</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
            
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                {isEnglish ? 'Your Name' : 'اسمك'}
              </label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                {isEnglish ? 'Your Email' : 'بريدك الإلكتروني'}
              </label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="subject">
                {isEnglish ? 'Subject' : 'الموضوع'}
              </label>
              <input 
                type="text" 
                id="subject" 
                className="form-input" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                {isEnglish ? 'Message' : 'الرسالة'}
              </label>
              <textarea 
                id="message" 
                className="form-textarea" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%' }} 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>{isEnglish ? 'Sending...' : 'جاري الإرسال...'}</span>
                  <i className="fas fa-spinner fa-spin btn-icon"></i>
                </>
              ) : (
                <>
                  <span>{isEnglish ? 'Send Message' : 'إرسال الرسالة'}</span>
                  <i className="fas fa-paper-plane btn-icon"></i>
                </>
              )}
            </button>
          </form>
          
          {notification && (
            <div 
              className={`notification notification-${notification.type}`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {notification.message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact