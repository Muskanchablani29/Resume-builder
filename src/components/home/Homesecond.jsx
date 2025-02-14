import React, { useEffect } from 'react';
import './Homesecond.css';
import icon1 from '../../images/Easytouse.png';
import icon2 from '../../images/Customizable.png';
import icon3 from '../../images/Templates.png';
import icon4 from '../../images/Friendlydesign.png';
import icon5 from '../../images/Multilanguage.png';
import icon6 from '../../images/Download.png';

export default function Homesecond() {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.Home_second_item');
            elements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Home_second">
            <div className="Home_second_top">
                <h1>Why Choose Us?</h1>
            </div>
            <div className="Home_second_grid">
                <div className="Home_second_item">
                    <img src={icon1} alt="Easy to Use" />
                    <h3>Easy to Use</h3>
                    <p>Our resume builder is designed to make creating resumes simple and hassle-free.</p>
                </div>
                <div className="Home_second_item">
                    <img src={icon2} alt="Customizable" />
                    <h3>Customizable</h3>
                    <p>Tailor your resume to showcase your unique skills and accomplishments.</p>
                </div>
                <div className="Home_second_item">
                    <img src={icon3} alt="Professional Templates" />
                    <h3>Professional Templates</h3>
                    <p>Choose from various templates to make your resume stand out.</p>
                </div>
                <div className="Home_second_item">
                    <img src={icon4} alt="ATS-Friendly Design" />
                    <h3>ATS-Friendly Design</h3>
                    <p>Our templates are optimized to pass Applicant Tracking Systems (ATS).</p>
                </div>
                <div className="Home_second_item">
                    <img src={icon5} alt="Multi-Language Support" />
                    <h3>Multi-Language Support</h3>
                    <p>Create resumes in your preferred language for global opportunities.</p>
                </div>
                <div className="Home_second_item">
                    <img src={icon6} alt="Download & Share Options" />
                    <h3>Download & Share</h3>
                    <p>Download in PDF or Word formats and easily share your resume.</p>
                </div>
            </div>
        </div>
    );
}
