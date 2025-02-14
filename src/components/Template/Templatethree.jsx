import React, { memo } from 'react';
import './Templatethree.css';
import pro1 from '../TemplatesImages/Template7.avif';
import pro2 from '../TemplatesImages/template8.avif';
import pro3 from '../TemplatesImages/Template9.avif';
import { NavLink } from 'react-router-dom';

const templates = [
  {
    image: pro1,
    title: "Professional Template 1",
    description: "Perfect balance of fresh and Functional resume template design.",
    link: "/UseTemplateseven"
  },
  {
    image: pro2,
    title: "Professional Template 2",
    description: "Perfect balance of fresh and Functional resume template design.",
    link: "/UseTemplateeight"
  },
  {
    image: pro3,
    title: "Professional Template 3",
    description: "Perfect balance of fresh and Functional resume template design.",
    link: "/UseTemplatenine"
  }
];

const Templatethree = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * 150;
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cards = document.querySelectorAll('.template-card');
    cards.forEach(card => observer.observe(card));

    // Cleanup function
    return () => observer.disconnect();
  }, []);

  const handleImageError = (e) => {
    e.target.src = 'fallback-image.jpg';
  };

  return (
    <main className="content-wrapper3">
      <section 
        className="slide-section active" 
        id="section1" 
        aria-label="Template Introduction"
      >
        <div className="Template">
          <div className="templateone-content">
            <div className="basic-heading">
              <h2>Professional Resume Templates</h2>
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

export default memo(Templatethree);
