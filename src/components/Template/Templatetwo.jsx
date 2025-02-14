import React, { memo, useEffect, useCallback } from 'react';
import './Templatetwo.css';
import modern1 from '../TemplatesImages/Template4.png';
import modern2 from '../TemplatesImages/Template5.jpg';
import modern3 from '../TemplatesImages/Template6.jpg';
import { NavLink } from 'react-router-dom';

const Templatetwo = () => {
  // Define templates outside of render to prevent recreation on each render
  const templates = [
    {
      image: modern1,
      title: "Modern Template 1",
      description: "Perfect balance of fresh and Functional resume template design.",
      link: "/UseTemplatefour"
    },
    {
      image: modern2,
      title: "Modern Template 2",
      description: "Perfect balance of fresh and Functional resume template design.",
      link: "/UseTemplatefive"
    },
    {
      image: modern3,
      title: "Modern Template 3",
      description: "Perfect balance of fresh and Functional resume template design.",
      link: "/UseTemplatesix"
    }
  ];

  // Memoize the intersection observer callback
  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = Array.from(card.parentNode.children).indexOf(card) * 150;
        setTimeout(() => {
          card.classList.add('active');
        }, delay);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('.template-card');
    cards.forEach(card => observer.observe(card));

    // Cleanup function
    return () => observer.disconnect();
  }, [handleIntersection]);

  // Memoize the error handler
  const handleImageError = useCallback((e) => {
    e.target.src = 'fallback-image.jpg';
  }, []);

  return (
    <main className="content-wrapper2">
      <section className="slide-section active" id="section1" aria-label="Template Introduction">
        <div className="Template">
          <div className="templateone-content">
            <div className="basic-heading">
              <h2>Modern Resume Templates</h2>
              <div className="basic-template1">
                {templates.map((template, index) => (
                  <div className="template-card" key={index}>
                    <img 
                      src={template.image}
                      alt={template.title}
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError}
                    />
                    <div className="template-hover-content">
                      <h3>{template.title}</h3>
                      <p>{template.description}</p>
                      <NavLink to={template.link}>
                        <button type="button">Use Template</button>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default memo(Templatetwo);
