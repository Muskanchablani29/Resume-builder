import React, { useState, useCallback, memo } from 'react';
import './UseTemplatetwo.css';
import { useNavigate } from 'react-router-dom';

const InputField = memo(({ label, type, name, value, onChange, placeholder }) => (
  <div className="t2-input-group">
    <label>{label}</label>
    {type === 'textarea' ? (
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} />
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    )}
  </div>
));

const UseTemplatetwo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    phone: '',
    email: '',
    jobTitle: '',
    summary: '',
    qualifications: '',
    areasOfExpertise: '',
    company: '',
    jobRole: '',
    workFrom: '',
    workTo: '',
    workDescription: '',
    degree: '',
    institution: '',
    eduYear: '',
    certifications: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handlePrint = useCallback(() => {
    const printableContent = document.querySelector('.t2-printable');
    const original = document.body.innerHTML;
    document.body.innerHTML = printableContent.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }, []);

  const handleBack = useCallback(() => navigate('/template'), [navigate]);

  const qualList = formData.qualifications
    ? formData.qualifications.split('\n').filter(Boolean)
    : [];

  const expertiseList = formData.areasOfExpertise
    ? formData.areasOfExpertise.split(',').map(s => s.trim()).filter(Boolean)
    : [];

  return (
    <div className="t2-container">
      {/* FORM */}
      <div className="t2-form non-printable">
        <h2>Build Your Resume</h2>
        <form>
          <div className="t2-section-title">Personal Info</div>
          <InputField label="Full Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Steve Stewart" />
          <InputField label="City, ZIP" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Street, City, ZIP" />
          <InputField label="Country" type="text" name="country" value={formData.country} onChange={handleChange} placeholder="e.g. Country" />
          <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 232.154.4455" />
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. name@stewart.com" />
          <InputField label="Job Title" type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="e.g. Web Designer" />

          <div className="t2-section-title">Professional Summary</div>
          <InputField label="Summary" type="textarea" name="summary" value={formData.summary} onChange={handleChange} placeholder="Write a brief professional summary..." />

          <div className="t2-section-title">Qualifications Summary</div>
          <InputField label="Qualifications (one per line)" type="textarea" name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="e.g. Extensive experience in web design&#10;Keep up to date with recent technologies" />

          <div className="t2-section-title">Areas of Expertise</div>
          <InputField label="Expertise (comma separated)" type="textarea" name="areasOfExpertise" value={formData.areasOfExpertise} onChange={handleChange} placeholder="e.g. HTML/DHTML, CSS, jQuery, PHP..." />

          <div className="t2-section-title">Work Experience</div>
          <InputField label="Company & Location" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. ABC Company, New York" />
          <InputField label="Job Role" type="text" name="jobRole" value={formData.jobRole} onChange={handleChange} placeholder="e.g. Sales Manager" />
          <InputField label="From (Month Year)" type="text" name="workFrom" value={formData.workFrom} onChange={handleChange} placeholder="e.g. October 2007" />
          <InputField label="To (Month Year / Present)" type="text" name="workTo" value={formData.workTo} onChange={handleChange} placeholder="e.g. Present" />
          <InputField label="Responsibilities (one per line)" type="textarea" name="workDescription" value={formData.workDescription} onChange={handleChange} placeholder="e.g. Designed and implemented a strategic business plan..." />

          <div className="t2-section-title">Education</div>
          <InputField label="Degree & Field" type="text" name="degree" value={formData.degree} onChange={handleChange} placeholder="e.g. MA Bachelor of Science, Chemistry" />
          <InputField label="Institution & Location" type="text" name="institution" value={formData.institution} onChange={handleChange} placeholder="e.g. State University, New York, USA" />
          <InputField label="Year" type="text" name="eduYear" value={formData.eduYear} onChange={handleChange} placeholder="e.g. 2002-2007" />

          <div className="t2-section-title">Certifications</div>
          <InputField label="Certifications (one per line)" type="textarea" name="certifications" value={formData.certifications} onChange={handleChange} placeholder="e.g. Certificate in Computer Graphics/Web Design, January 2008&#10;American College of Technology, New York, USA" />
        </form>
      </div>

      {/* PREVIEW */}
      <div className="t2-preview non-printable">
        <div className="t2-preview-header">
          <h2>Resume Preview</h2>
          <div className="t2-preview-btns">
            <button onClick={handlePrint} className="t2-print-btn">Print Resume</button>
            <button onClick={handleBack} className="t2-back-btn">Back to Templates</button>
          </div>
        </div>

        <div className="t2-resume t2-printable">
          {/* Blue left border accent */}
          <div className="t2-left-bar"></div>

          <div className="t2-resume-inner">
            {/* Header: name top-right style */}
            <div className="t2-header">
              <div className="t2-header-name">
                <span className="t2-arrow">&#9658;</span>
                <strong>{formData.name || 'Your Name'}</strong>
              </div>
              <div className="t2-header-contact">
                <span>{formData.city || 'Street, City, ZIP'}{formData.country ? `, ${formData.country}` : ', Country'}</span>
                <span>Phone: {formData.phone || '000.000.0000'}</span>
                <span>E-mail: {formData.email || 'email@example.com'}</span>
              </div>
            </div>

            {/* Job Title */}
            <div className="t2-job-title">
              <h2>{formData.jobTitle || 'JOB TITLE'}</h2>
            </div>

            {/* Summary */}
            {formData.summary && (
              <p className="t2-summary">{formData.summary}</p>
            )}
            {!formData.summary && (
              <p className="t2-summary t2-placeholder">Highly motivated and goal-oriented professional committed to pursuing a long-term career...</p>
            )}

            {/* Qualifications Summary */}
            <div className="t2-section">
              <div className="t2-section-heading">QUALIFICATIONS SUMMARY</div>
              <ul className="t2-bullet-list">
                {qualList.length > 0
                  ? qualList.map((q, i) => <li key={i}>{q}</li>)
                  : <li className="t2-placeholder">Extensive experience in creating the design and layout of a website or web pages.</li>
                }
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div className="t2-section">
              <div className="t2-section-heading">AREAS OF EXPERTISE</div>
              <p className="t2-expertise">
                {expertiseList.length > 0
                  ? expertiseList.join(' • ')
                  : <span className="t2-placeholder">HTML/DHTML • CSS • jQuery • PHP • Web Design Principles • Color Theory</span>
                }
              </p>
            </div>

            {/* Work Experience */}
            <div className="t2-section">
              <div className="t2-section-heading">WORK EXPERIENCE</div>
              <div className="t2-work-header">
                <span className="t2-company">{formData.company || 'Company Name, Location'} <span className="t2-period">{formData.workFrom || 'Month Year'}</span></span>
                <span className="t2-work-dates">{formData.workTo || 'Present'}</span>
              </div>
              <div className="t2-job-role">{formData.jobRole || 'Job Role'}</div>
              <ul className="t2-bullet-list">
                {formData.workDescription
                  ? formData.workDescription.split('\n').filter(Boolean).map((d, i) => <li key={i}>{d}</li>)
                  : <li className="t2-placeholder">Designed and implemented a strategic business plan to expand the company's customer base.</li>
                }
              </ul>
            </div>

            {/* Education */}
            <div className="t2-section">
              <div className="t2-section-heading">EDUCATION</div>
              <div className="t2-edu-degree">{formData.degree || 'Degree & Field, Year'}{formData.eduYear ? `, ${formData.eduYear}` : ''}</div>
              <div className="t2-edu-inst">{formData.institution || 'Institution, Location'}</div>
            </div>

            {/* Certifications */}
            <div className="t2-section">
              <div className="t2-section-heading">CERTIFICATIONS</div>
              {formData.certifications
                ? formData.certifications.split('\n').filter(Boolean).map((c, i) => <p key={i} className="t2-cert">{c}</p>)
                : <p className="t2-cert t2-placeholder">Certificate in Computer Graphics/Web Design, January 2008<br />American College of Technology, New York, USA</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UseTemplatetwo);
