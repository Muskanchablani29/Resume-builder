import React, { useCallback, useEffect, useState, useMemo } from 'react';
import './Contact.css';
import icon from '../Icons/Phone.png';
import icon2 from '../Icons/Message.png';
import icon3 from '../Icons/Mobile.png';
import icon4 from '../Icons/Location.png';

export default function ContactFirst() {
  // Memoize icon sources
  const iconSources = useMemo(() => [icon, icon2, icon3, icon4], [icon2,icon,icon3,icon4]);
  const numberOfIcons = 15;

  // Memoize the initial icons generation function
  const generateInitialIcons = useCallback(() => (
    Array.from({ length: numberOfIcons }, (_, index) => ({
      id: index,
      src: iconSources[index % iconSources.length], // More efficient distribution
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      scale: 0.8 + Math.random() * 0.4,
      delay: `${index * 0.5}s`, // More controlled delays
      translateX: 0,
      translateY: 0,
    }))
  ), [iconSources]);

  const [icons, setIcons] = useState(generateInitialIcons);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Memoize form handling
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = e.target;
    
    if (form.checkValidity()) {
      try {
        // Add your form submission logic here
        console.log('Form submitted:', formData);
      } catch (error) {
        console.error('Submission error:', error);
      }
    }
  }, [formData]);

  // Optimize mouse movement handling
  useEffect(() => {
    let rafId;
    let lastMouseX = 0;
    let lastMouseY = 0;
    const threshold = 5; // Minimum movement threshold

    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      // Only update if movement is significant
      if (Math.abs(mouseX - lastMouseX) > threshold || 
          Math.abs(mouseY - lastMouseY) > threshold) {
        
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          setIcons(prevIcons => 
            prevIcons.map((icon, index) => {
              const depth = 0.05 + (index % 3) * 0.02;
              return {
                ...icon,
                translateX: (mouseX - 0.5) * depth * 100,
                translateY: (mouseY - 0.5) * depth * 100
              };
            })
          );
        });

        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Optimize resize handling
  useEffect(() => {
    const handleResize = debounce(() => {
      setIcons(prevIcons => 
        prevIcons.map(icon => ({
          ...icon,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }))
      );
    }, 250);

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='Contact'>
      <div className="background-icons">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="icon"
            style={{
              left: icon.left,
              top: icon.top,
              transform: `scale(${icon.scale}) translate(${icon.translateX}px, ${icon.translateY}px)`,
              animationDelay: icon.delay,
            }}
          >
            <img src={icon.src} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Your Name"
            required
            minLength="2"
            maxLength="50"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Your Email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            rows="5"
            required
            minLength="10"
            maxLength="500"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
