import React, { useState, useCallback, memo } from 'react';
import './UseTemplatetwo.css';
import { useNavigate } from 'react-router-dom';

const InputField = memo(({ label, type, name, value, onChange, placeholder }) => (
  <div className="input-group">
    <label>{label}</label>
    {type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ) : ( 
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
  </div>
));

const UseTemplatetwo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
    photo: null,
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handlePhotoUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({
          ...prev,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handlePrint = useCallback(() => {
    const printableContent = document.querySelector('.printable');
    const OriginalContent = document.body.innerHTML;

    document.body.innerHTML = printableContent.innerHTML;
    window.print();
    document.body.innerHTML = OriginalContent;
  }, []);

  const handleBack = useCallback(() => {
    navigate('/template');
  }, [navigate]);

  return (
    <div className="resume-container">
      {/* Form Section */}
      <div className="form-section non-printable">
        <h2>Build Your Resume</h2>
        <form>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <InputField
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          <InputField
            label="Address"
            type="textarea"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />

          <InputField
            label="Professional Summary"
            type="textarea"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Write a brief summary about yourself"
          />

          <InputField
            label="Work Experience"
            type="textarea"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="List your work experience"
          />

          <InputField
            label="Education"
            type="textarea"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="List your education details"
          />

          <InputField
            label="Skills"
            type="textarea"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="List your skills"
          />

          <div className="input-group">
            <label>Upload Photo</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePhotoUpload} 
              className="file-input"
            />
          </div>
        </form>
      </div>

      {/* Preview Section */}
      <div className="preview-section printable">
        <div className="preview-header">
          <h2>Resume Preview</h2>
          <div className="preview-buttons">
            <button onClick={handlePrint} className="print-btn">Print Resume</button>
            <button onClick={handleBack} className="back-btn">Back to Templates</button>
          </div>
        </div>
        <div className="resume-preview">
          <div className="resume-header">
            {formData.photo && (
              <img 
                src={formData.photo} 
                alt="Profile" 
                className="profile-photo"
              />
            )}
            <div className="header-content">
              <h1>{formData.name || "Your Name"}</h1>
              <div className="contact-info">
                <p>{formData.email || "your.email@example.com"}</p>
                <p>{formData.phone || "Your Phone Number"}</p>
                <p>{formData.address || "Your Address"}</p>
              </div>
            </div>
          </div>
          
          <div className="resume-body">
            <section>
              <h3>Professional Summary</h3>
              <p>{formData.summary || "Write a summary about yourself here."}</p>
            </section>

            <section>
              <h3>Work Experience</h3>
              <p>{formData.experience || "List your work experience here."}</p>
            </section>

            <section>
              <h3>Education</h3>
              <p>{formData.education || "List your education details here."}</p>
            </section>

            <section>
              <h3>Skills</h3>
              <p>{formData.skills || "List your skills here."}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UseTemplatetwo);
