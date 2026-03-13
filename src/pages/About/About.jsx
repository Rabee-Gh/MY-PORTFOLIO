import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./About.css"

const About = ({ data, isEnglish }) => {
  const [activePanel, setActivePanel] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      offset: 100,
      delay: 0,
    });

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
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
  const itemsPerPage = 1;
  const totalPages = Math.ceil(panelsData.length / itemsPerPage);

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

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setActivePanel(newPage * itemsPerPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setActivePanel(newPage * itemsPerPage);
    }
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    setActivePanel(pageIndex * itemsPerPage);
  };

  // Get panels for current page (mobile only)
  const getCurrentPagePanels = () => {
    if (!isMobile) return panelsData;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return panelsData.slice(startIndex, endIndex);
  };

  const displayedPanels = getCurrentPagePanels();

  const renderPanelContent = () => {
    if (activePanel === null) return null;

    const panel = panelsData[activePanel];

    if (panel && panel.type === 'question') {
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
            {displayedPanels.map((panel, displayIndex) => {
              const actualIndex = isMobile ? (currentPage * itemsPerPage + displayIndex) : panel.id;
              return (
                <div
                  key={panel.id}
                  className="glass-panel"
                  style={{
                    '--panel-color': getPanelColors(actualIndex),
                    '--panel-index': actualIndex + 1
                  }}
                  onClick={() => setActivePanel(actualIndex)}
                  data-aos="fade-up"
                  data-aos-delay={500 + (displayIndex * 100)}
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
                    <span>{actualIndex + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Pagination Controls - Inside Glass Window */}
          {isMobile && totalPages > 1 && (
            <div
              className="mobile-pagination-inside"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <button
                className="pagination-btn prev"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                aria-label={isEnglish ? "Previous" : "السابق"}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="pagination-dots">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
                    onClick={() => handlePageClick(index)}
                    aria-label={`${isEnglish ? 'Page' : 'صفحة'} ${index + 1}`}
                  >
                    <span>{index + 1}</span>
                  </button>
                ))}
              </div>

              <button
                className="pagination-btn next"
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                aria-label={isEnglish ? "Next" : "التالي"}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
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

        {/* Navigation Dots - Desktop Only */}
        {!isMobile && (
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
        )}

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
