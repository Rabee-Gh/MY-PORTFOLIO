import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./About.css"

const About = ({ data, isEnglish }) => {
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-out-cubic',
      once: false, 
      mirror: false, 
      offset: 100, 
      delay: 0,
    });
  }, []);

  const { aboutQuestions } = data;

  const getPanelsData = () => {
    const panels = [];
    
    if (aboutQuestions && Array.isArray(aboutQuestions)) {
      aboutQuestions.forEach((question, index) => {
        panels.push({
          id: index,
          type: 'question',
          title: isEnglish ? question.questionEn : question.question,
          content: isEnglish ? question.answerEn : question.answer,
          icon: ['fas fa-user', 'fas fa-code', 'fas fa-project-diagram', 'fas fa-rocket'][index % 4]
        });
      });
    }
    return panels;
  };

  const panelsData = getPanelsData();

  const getPanelColors = (index) => {
    const colors = [
      'var(--primary-color)',     // Blue
      'var(--secondary-color)',   // Purple
      'var(--accent-color)',      // Cyan
      'var(--success-color)',     // Green
      'var(--warning-color)',     // Yellow
      'var(--danger-color)'       // Pink
    ];
    return colors[index % colors.length];
  };

  const renderPanelContent = () => {
    if (activePanel === null) return null;
    
    const panel = panelsData[activePanel];
    
    if (panel.type === 'question') {
      return (
        <div className="active-panel-content question">
          <h3>{panel.title}</h3>
          <div className="content-text">
            <p>{panel.content}</p>
          </div>
        </div>
      );
    } 
  };

  return (
    <section id="about" className="section">
      <div className="section-header">
        <span 
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isEnglish ? "Get to know me" : "تعرف عليّ أكثر"}
        </span>
        
        <h2 
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {isEnglish ? "About Me" : "من أنا"}
        </h2>
        
        <p 
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {isEnglish 
            ? "Discover my journey through this simple questions about me"
            : "اكتشف رحلتي من خلال الأسئلة البسيطة عني    "}
        </p>
      </div>
      
      <div className="stained-glass-container">
        <div 
          className="stained-glass-window"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          {/* Light Source Effect */}
          <div className="light-source"></div>
          
          {/* Window Frame */}
          <div className="window-frame">
            {/* Decorative Elements */}
            <div className="window-ornament top-left"></div>
            <div className="window-ornament top-right"></div>
            <div className="window-ornament bottom-left"></div>
            <div className="window-ornament bottom-right"></div>

            {/* Stained Glass Panels */}
            {panelsData.map((panel, index) => (
              <div 
                key={panel.id}
                className="glass-panel"
                style={{
                  '--panel-color': getPanelColors(index),
                  '--panel-index': index + 1
                }}
                onClick={() => setActivePanel(index)}
                data-aos="fade-up"
                data-aos-delay={500 + (index * 100)}
                data-aos-duration="800"
              >
                {/* Glass Facets */}
                <div className="glass-facet facet-1"></div>
                <div className="glass-facet facet-2"></div>
                <div className="glass-facet facet-3"></div>
                <div className="glass-facet facet-4"></div>
                
                {/* Panel Icon */}
                <div className="panel-icon">
                  <i className={panel.icon}></i>
                </div>
                
                {/* Panel Title */}
                <div className="panel-title">
                  <h4>{panel.title}</h4>
                </div>
                
                {/* Panel Label */}
                <div className="panel-label">
                  <span>{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Panel Content Display */}
        <div className={`active-panel-display ${activePanel !== null ? 'visible' : ''}`}>
          {activePanel !== null && (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              {renderPanelContent()}
            </div>
          )}
        </div>

        {/* Navigation Dots */}
        <div 
          className="panel-navigation"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {panelsData.map((panel, index) => (
            <button
              key={panel.id}
              className={`nav-dot ${activePanel === index ? 'active' : ''}`}
              style={{ '--dot-color': getPanelColors(index) }}
              onClick={() => setActivePanel(index)}
              aria-label={`Go to panel ${index + 1}`}
              data-aos="zoom-in"
              data-aos-delay={900 + (index * 50)}
            />
          ))}
        </div>

        {/* Instructions */}
        <div 
          className="instructions"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <p className="instruction-text">
            <i className="fas fa-mouse-pointer"></i>
            {isEnglish 
              ? "Click on any panel to reveal details below"
              : "انقر على أي لوحة لكشف التفاصيل أدناه"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

