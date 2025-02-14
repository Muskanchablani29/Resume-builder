import React, { useState } from 'react';
import './ResumeBuilder.css';

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    Address: '',
    summary: '',
    education: '',
    experience: '',
    Pskills: '',
    Cskills: '',
    Iskills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="resume-builder">
      <div className="form-container">
        <h1>Resume Builder</h1>
        <form>
          <div className="first-line">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="second-list">
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Address:</label>
              <input
                type='text'
                id="address"
                name='Address'
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="skills-container">
            <div className="form-group2">
              <label htmlFor="Pskills">Language Skills:</label>
              <input
                type='text'
                id="skills"
                name="Pskills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group2">
              <label htmlFor="Cskills">Computer Skills:</label>
              <input
              type='text'
                id="skills"
                name="Cskills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group2">
              <label htmlFor="Iskills">Personal Interest:</label>
              <input
              type='text'
                id="skills"
                name="Iskills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group2">
            <label htmlFor="summary">Professional Summary:</label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group2">
            <label htmlFor="education">Education:</label>
            <textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group2">
            <label htmlFor="experience">Work Experience:</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            ></textarea>
          </div>


        </form>
      </div>

      <div className="preview-container">
        <h2>Resume Preview</h2>
        <div className="resume-template">
          <div className="name">
            <h3>{formData.name || 'Your Name'}</h3>
          </div>
          <div className="address">
            <p><strong>Address:</strong>{formData.Address || 'Your Address'}</p>
          </div>
          <div className="phone">
            <p><strong>Phone:</strong> {formData.phone || 'Your Phone'}</p>
          </div>
          <div className="email">
            <p><strong>Email:</strong> {formData.email || 'Your Email'}</p>
          </div>
          <div className="skills">
            <h4>Skills</h4>
            {/* <p>{formData.skills || 'List your skills here.'}</p> */}
            <div className="skills-list">
              <h4>Language</h4>
              <p>{formData.Pskills || 'List your Languages you Know'}</p>
              <h4>Computer Skills</h4>
              <p>{formData.Cskills || 'List your Computer skills here.'}</p>
              <h4>Personal Interests</h4>
              <p>{formData.Iskills || 'List your Publications skills here.'}</p>
            </div>
          </div>

          <h4>Professional Summary</h4>
          <p>{formData.summary || 'Summary of your professional experience and goals.'}</p>
          <h4>Education</h4>
          <p>{formData.education || 'Details about your educational background.'}</p>
          <h4>Work Experience</h4>
          <p>{formData.experience || 'Details about your work experience.'}</p>

        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
