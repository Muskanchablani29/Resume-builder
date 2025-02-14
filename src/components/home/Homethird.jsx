import React, { useState, useCallback, useMemo, useEffect } from 'react';
import './Homethird.css';
import image1 from "../Images/Template1.jpg";
import image2 from "../Images/Template2.jpeg";
import image3 from "../Images/Template3.jpg";
import image4 from "../Images/Template4.png";
import image5 from "../Images/Template5.jpg";
import image6 from "../Images/Template6.jpg";
import image7 from "../Images/Template7.avif";
import image8 from "../Images/template8.avif";
import image9 from "../Images/Template9.avif";
import { NavLink } from 'react-router-dom';

export default function HomeThird() {
    const templateData = useMemo(() => [
        // ... your existing template data ...
        { 
            image: image1, 
            buttonText: "Use Basic Template",
            buttonClass: "button-basic",
            link: "/UseTemplateone"
        },
        { 
            image: image2, 
            buttonText: "Use Basic Template",
            buttonClass: "button-premium",
            link: "/UseTemplatetwo"
        },
        { 
            image: image3, 
            buttonText: "Use Basic Template",
            buttonClass: "button-pro",
            link: "/UseTemplatethree"
        },
        { 
            image: image4, 
            buttonText: "Use Modern Template",
            buttonClass: "button-start",
            link: "/UseTemplatefour"
        },
        { 
            image: image5, 
            buttonText: "Use Modern Template",
            buttonClass: "button-design",
            link: "/UseTemplatefive"
        },
        { 
            image: image6, 
            buttonText: "Use Modern Template",
            buttonClass: "button-standard",
            link: "/UseTemplatesix"
        },
        { 
            image: image7, 
            buttonText: "Use Professional Template",
            buttonClass: "button-preview",
            link: "/UseTemplateseven"
        },
        { 
            image: image8, 
            buttonText: "Use Professional Template",
            buttonClass: "button-quick",
            link: "/UseTemplateeight"
        },
        { 
            image: image9, 
            buttonText: "Use Professional Template",
            buttonClass: "button-theme",
            link: "/UseTemplatenine"
        }
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = templateData.length;
    const slideInterval = 2000;

    // Calculate visible templates (showing 3 at a time)
    const visibleTemplates = useMemo(() => {
        const templates = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % totalSlides;
            templates.push(templateData[index]);
        }
        return templates;
    }, [currentIndex, templateData, totalSlides]);

    const handleNext = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, [totalSlides]);

    const handlePrev = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    useEffect(() => {
        let autoSlideTimer;

        const startAutoSlide = () => {
            autoSlideTimer = setInterval(handleNext, slideInterval);
        };

        const stopAutoSlide = () => {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
            }
        };

        // Start the auto-sliding
        startAutoSlide();

        // Pause auto-sliding when user hovers over the slider
        const sliderElement = document.querySelector('.Templates_Slider');
        
        if (sliderElement) {
            sliderElement.addEventListener('mouseenter', stopAutoSlide);
            sliderElement.addEventListener('mouseleave', startAutoSlide);
        }

        // Cleanup function
        return () => {
            stopAutoSlide();
            if (sliderElement) {
                sliderElement.removeEventListener('mouseenter', stopAutoSlide);
                sliderElement.removeEventListener('mouseleave', startAutoSlide);
            }
        };
    }, [handleNext]);

    return (
        <div className='Home_third'>
            <div className="top_head">
                <h1>Choose Template</h1>
                <p>Choose from a variety of templates to find the one that best suits your needs.</p>
            </div>
            <div className="Templates_Slider">
                <button 
                    className="slider-button prev" 
                    onClick={handlePrev}
                    aria-label="Previous template"
                >
                    ❮
                </button>
                <div className="templates_images">
                    {visibleTemplates.map((template, index) => (
                        <div 
                            className="image-container" 
                            key={`template-${currentIndex + index}`}
                        >
                            <img 
                                src={template.image} 
                                alt={`Template ${currentIndex + index + 1}`} 
                                className="image"
                                loading="lazy"
                            />
                            <NavLink to={template.link}>
                                <button className={`use-template-button ${template.buttonClass}`}>
                                    {template.buttonText}
                                </button>
                            </NavLink>
                        </div>
                    ))}
                </div>
                <button 
                    className="slider-button next" 
                    onClick={handleNext}
                    aria-label="Next template"
                >
                    ❯
                </button>
            </div>
        </div>
    );
}

