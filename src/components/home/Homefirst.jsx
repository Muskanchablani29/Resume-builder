import React from 'react';
import image from '../../images/Home1.jpeg';
import image1 from '../../images/Home2.jpeg';
import '../Home.css';
import image2 from '../../images/Home3.jpeg';
import image3 from '../../images/Home4.png';
import image4 from '../../images/Home5.jpeg';
import image5 from '../../images/Home6.jpeg';
import { NavLink } from 'react-router-dom';

export default function Homefirst() {
  const images = [image, image1, image2, image3, image4, image5];
  return (
    <div className="Home_first landing-container">
      <div className="Home_first_left">
        <div className="top_heading typing">
          <h1>Build Your Resume in Minutes!</h1>
        </div>
        <div className="top_para">
          <p>
            Build your resume in minutes with our easy-to-use resume builder. Create a professional resume in just a few clicks and get it in the desired format. Our website provides you a variety of templates to create your resume.
          </p>
        </div>
        <div className="top_button">
          <NavLink to="/Template"><button>Create Resume</button></NavLink>
        </div>
      </div>
      <div className="Home_first_right">
        <div className="slider-home">
          <div className="slide-home_track">
            {images.map((img, idx) => (
              <div className="slide-home" key={idx}>
                <img src={img} alt={`Resume Example ${idx}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="slider2-home">
          <div className="slide-home_track2">
            {images.map((img, idx) => (
              <div className="slide2-home" key={idx}>
                <img src={img} alt={`Resume Example ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
