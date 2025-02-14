import React, { useState } from 'react';
import './UseTemplatesix.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    location: '',
    profile: '',
    experience: '',
    education: '',
    skills: '',
    interests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Resume Form</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Surname:
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleChange} />
          </label>
          <label>
            Profile:
            <textarea name="profile" value={formData.profile} onChange={handleChange}></textarea>
          </label>
          <label>
            Experience:
            <textarea name="experience" value={formData.experience} onChange={handleChange}></textarea>
          </label>
          <label>
            Education:
            <textarea name="education" value={formData.education} onChange={handleChange}></textarea>
          </label>
          <label>
            Skills:
            <textarea name="skills" value={formData.skills} onChange={handleChange}></textarea>
          </label>
          <label>
            Interests:
            <textarea name="interests" value={formData.interests} onChange={handleChange}></textarea>
          </label>
        </form>
      </div>

      <div className="preview-container">
        <div className="resume">
          <div className="resume-sidebar">
            <div className="photo" />
            <div className="profile">
              <h3>Profile</h3>
              <p>{formData.profile}</p>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <p>{formData.email}</p>
              <p>{formData.phone}</p>
              <p>{formData.location}</p>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <p>{formData.skills}</p>
            </div>
            <div className="interests">
              <h3>Interests</h3>
              <p>{formData.interests}</p>
            </div>
          </div>
          <div className="resume-main">
            <div className="header">
              <h1>{formData.name} {formData.surname}</h1>
            </div>
            <div className="experience">
              <h3>Experience</h3>
              <p>{formData.experience}</p>
            </div>
            <div className="education">
              <h3>Education</h3>
              <p>{formData.education}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
