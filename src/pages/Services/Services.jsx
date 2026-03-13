import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Services.css"

const Services = ({ data, isEnglish }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            offset: 100,
            delay: 100
        })
    }, [])

    return (
        <section id="services" className="section">
            <div className="section-header">
                <span
                    className="section-subtitle"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {isEnglish ? 'What I Offer' : 'ما أقدمه'}
                </span>
                <h2
                    className="section-title"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {isEnglish ? 'My Services' : 'خدماتي'}
                </h2>
                <p
                    className="section-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {isEnglish
                        ? 'Professional web development services tailored to your needs'
                        : 'خدمات تطوير ويب احترافية مصممة خصيصاً لاحتياجاتك'}
                </p>
            </div>

            <div className="services-grid">
                {data.services.map((service, index) => (
                    <div
                        key={service.id}
                        className="service-card"
                        data-aos="fade-up"
                        data-aos-delay={100 + (index * 100)}
                        data-aos-duration="800"
                        style={{ '--service-color': service.color }}
                    >
                        <div className="service-card-inner">
                            {/* Front Side */}
                            <div className="service-card-front">
                                <div className="service-icon-wrapper">
                                    <div className="service-icon-bg"></div>
                                    <i className={service.icon}></i>
                                </div>

                                <h3 className="service-title">
                                    {isEnglish ? service.titleEn : service.title}
                                </h3>

                                <p className="service-description">
                                    {isEnglish ? service.descriptionEn : service.description}
                                </p>

                                <div className="service-hover-indicator">
                                    <span>{isEnglish ? 'View Details' : 'عرض التفاصيل'}</span>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div className="service-card-back">
                                <div className="service-features">
                                    <h4 className="features-title">
                                        {isEnglish ? 'Key Features' : 'المميزات الرئيسية'}
                                    </h4>
                                    <ul className="features-list">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="feature-item">
                                                <i className="fas fa-check-circle"></i>
                                                <span>{isEnglish ? feature.textEn : feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-cta">
                                    <a href="#contact" className="service-btn">
                                        <span>{isEnglish ? 'Get Started' : 'ابدأ الآن'}</span>
                                        <i className="fas fa-arrow-left"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="service-card-glow"></div>
                        <div className="service-card-shine"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
