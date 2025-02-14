import React, { memo, useMemo, useEffect, useRef } from 'react';
import './Templateone.css';
import { NavLink } from 'react-router-dom';

// Import images
import basic1 from '../TemplatesImages/Template1.jpg';
import basic2 from '../TemplatesImages/Template2.jpeg';
import basic3 from '../TemplatesImages/Template3.jpg';

// Template data
const TEMPLATE_DATA = [
  {
    image: basic1,
    title: "Basic Template 1",
    description: "Professional and clean design perfect for traditional industries",
    link: "/UseTemplateone"
  },
  {
    image: basic2,
    title: "Basic Template 2",
    description: "Professional and clean design perfect for traditional industries",
    link: "/UseTemplatetwo"
  },
  {
    image: basic3,
    title: "Basic Template 3",
    description: "Professional and clean design perfect for traditional industries",
    link: "/UseTemplatethree"
  }
];

// Template Card Component
const TemplateCard = memo(({ template, index }) => (
  <div className="template-card" key={index}>
    <img 
      src={template.image}
      alt={template.title}
      loading="lazy"
      decoding="async"
      width="300"
      height="400"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = '/fallback-image.jpg';
      }}
    />
    <div className="template-hover-content">
      <h3>{template.title}</h3>
      <p>{template.description}</p>
      <NavLink to={template.link}>
        <button type="button">Use Template</button>
      </NavLink>
    </div>
  </div>
));

const Templateone = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const cards = document.querySelectorAll('.template-card');
    cards.forEach(card => {
      observerRef.current.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const templateCards = useMemo(() => 
    TEMPLATE_DATA.map((template, index) => (
      <TemplateCard 
        key={index} 
        template={template} 
        index={index} 
      />
    )),
    []
  );

  return (
    <main className="content-wrapper">
      <section 
        className="slide-section active" 
        id="section1" 
        aria-label="Template Introduction"
      >
        <div className="Template">
          <div className="templateone-content">
            <div className="template-top">
              <h1>Pick a Template from a Variety of Templates</h1>
              <p>
                Each resume template is designed to follow the exact rules you need to get hired faster.
                <br /> 
                Use our resume templates and get free access to 18 more career tools!
              </p>
            </div>
          </div>
        </div>

        <div className="Template">
          <div className="templateone-content">
            <div className="basic-heading">
              <h2>Basic Resume Templates</h2>
              <div className="basic-template1">
                {templateCards}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default memo(Templateone);
