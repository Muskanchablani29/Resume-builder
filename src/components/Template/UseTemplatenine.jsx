import React, { useState, useCallback, memo } from 'react';
import './UseTemplatenine.css';
import { useNavigate } from 'react-router-dom';

const InputField = memo(({ label, type, name, value, onChange, placeholder }) => (
  <div className="t9-input-group">
    <label>{label}</label>
    {type === 'textarea' ? (
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} />
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    )}
  </div>
));

const UseTemplatenine = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    tagline: '',
    summary: '',
    // skills: one per line
    skills: '',
    // exp entries
    exp1Role: '', exp1Company: '', exp1Location: '', exp1From: '', exp1To: '', exp1Bullets: '',
    exp2Role: '', exp2Company: '', exp2Location: '', exp2From: '', exp2To: '', exp2Bullets: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handlePhoto = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  }, []);

  const handlePrint = useCallback(() => {
    const printable = document.querySelector('.t9-printable');
    const original = document.body.innerHTML;
    document.body.innerHTML = printable.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }, []);

  const handleBack = useCallback(() => navigate('/template'), [navigate]);

  const skillsList = formData.skills
    ? formData.skills.split('\n').filter(Boolean)
    : [
        'Excellent Communication Skills',
        'Project Management Skills',
        'Creativity and Problem Solving',
        'Digital Marketing',
        'Industry Trends & Sales Forecasting',
      ];

  const expEntries = [
    { role: formData.exp1Role, company: formData.exp1Company, location: formData.exp1Location, from: formData.exp1From, to: formData.exp1To, bullets: formData.exp1Bullets },
    { role: formData.exp2Role, company: formData.exp2Company, location: formData.exp2Location, from: formData.exp2From, to: formData.exp2To, bullets: formData.exp2Bullets },
  ].filter(e => e.role || e.company);

  const defaultExp = [
    {
      role: 'Marketing Manager', company: 'Zane Telecommunications', location: 'Austin',
      from: 'November 2011', to: 'August 2019',
      bullets: 'Effectively managed creative projects, promoting a superior corporate image.\nDesigned and implemented direct mail campaigns, resulting in a 10% sales increase per quarter.\nDeveloped and maintained internal and external relationships, which were crucial to company advancement and success.\nAssessed the strategies of competitors, while avidly working to increase our own productivity.',
    },
    {
      role: 'Marketing Manager', company: 'Bright Solutions', location: 'Austin',
      from: 'January 2008', to: 'October 2011',
      bullets: 'Researched the motivations of users and consumers to better understand company goals.\nPut forth carefully planned strategies to improve company business.\nFostering relationships to maintain existing clients, while developing new relationships to attract potential clients.',
    },
  ];

  const displayExp = expEntries.length > 0 ? expEntries : defaultExp;

  // Split skills into rows of 3 for the 3-column layout
  const skillRows = [];
  for (let i = 0; i < skillsList.length; i += 3) {
    skillRows.push(skillsList.slice(i, i + 3));
  }

  return (
    <div className="t9-container">
      {/* FORM */}
      <div className="t9-form non-printable">
        <h2>Build Your Resume</h2>
        <form>
          <div className="t9-sec-label">Personal Info</div>
          <InputField label="Full Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. MONICA HELMSLEY" />
          <InputField label="Job Title" type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="e.g. Marketing Manager" />
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. monica.12@gmail.com" />
          <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. (512) 465-6312" />
          <InputField label="Address" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="e.g. 77 Serial Drive, Austin, TX 78705, United States" />
          <div className="t9-input-group">
            <label>Profile Photo</label>
            <input type="file" accept="image/*" onChange={handlePhoto} />
          </div>

          <div className="t9-sec-label">Tagline (large bold statement)</div>
          <InputField label="Tagline" type="textarea" name="tagline" value={formData.tagline} onChange={handleChange} placeholder="e.g. Experienced and energetic Marketing Manager with over seven years of experience effectively managing marketing projects from conception to completion." />

          <div className="t9-sec-label">Summary Paragraph</div>
          <InputField label="Summary" type="textarea" name="summary" value={formData.summary} onChange={handleChange} placeholder="Adept in using digital marketing platforms to increase sales..." />

          <div className="t9-sec-label">Skills (one per line)</div>
          <InputField label="Skills" type="textarea" name="skills" value={formData.skills} onChange={handleChange} placeholder={"Excellent Communication Skills\nProject Management Skills\nCreativity and Problem Solving\nDigital Marketing\nIndustry Trends & Sales Forecasting"} />

          <div className="t9-sec-label">Experience — Entry 1</div>
          <InputField label="Role / Title" type="text" name="exp1Role" value={formData.exp1Role} onChange={handleChange} placeholder="e.g. Marketing Manager" />
          <InputField label="Company" type="text" name="exp1Company" value={formData.exp1Company} onChange={handleChange} placeholder="e.g. Zane Telecommunications" />
          <InputField label="Location" type="text" name="exp1Location" value={formData.exp1Location} onChange={handleChange} placeholder="e.g. Austin" />
          <InputField label="From" type="text" name="exp1From" value={formData.exp1From} onChange={handleChange} placeholder="e.g. November 2011" />
          <InputField label="To" type="text" name="exp1To" value={formData.exp1To} onChange={handleChange} placeholder="e.g. August 2019" />
          <InputField label="Bullet Points (one per line)" type="textarea" name="exp1Bullets" value={formData.exp1Bullets} onChange={handleChange} placeholder="Effectively managed creative projects..." />

          <div className="t9-sec-label">Experience — Entry 2</div>
          <InputField label="Role / Title" type="text" name="exp2Role" value={formData.exp2Role} onChange={handleChange} placeholder="e.g. Marketing Manager" />
          <InputField label="Company" type="text" name="exp2Company" value={formData.exp2Company} onChange={handleChange} placeholder="e.g. Bright Solutions" />
          <InputField label="Location" type="text" name="exp2Location" value={formData.exp2Location} onChange={handleChange} placeholder="e.g. Austin" />
          <InputField label="From" type="text" name="exp2From" value={formData.exp2From} onChange={handleChange} placeholder="e.g. January 2008" />
          <InputField label="To" type="text" name="exp2To" value={formData.exp2To} onChange={handleChange} placeholder="e.g. October 2011" />
          <InputField label="Bullet Points (one per line)" type="textarea" name="exp2Bullets" value={formData.exp2Bullets} onChange={handleChange} placeholder="Researched the motivations of users and consumers..." />
        </form>
      </div>

      {/* PREVIEW */}
      <div className="t9-preview non-printable">
        <div className="t9-preview-header">
          <h2>Resume Preview</h2>
          <div className="t9-preview-btns">
            <button onClick={handlePrint} className="t9-print-btn">Print Resume</button>
            <button onClick={handleBack} className="t9-back-btn">Back to Templates</button>
          </div>
        </div>

        <div className="t9-resume t9-printable">
          {/* HEADER */}
          <div className="t9-header">
            <div className="t9-header-top">
              <div className="t9-header-left">
                {photo
                  ? <img src={photo} alt="Profile" className="t9-photo" />
                  : <div className="t9-photo-placeholder"></div>
                }
                <div className="t9-header-name-block">
                  <div className="t9-name">{formData.name || 'MONICA HELMSLEY'}</div>
                  <div className="t9-job-title">{formData.jobTitle || 'Marketing Manager'}</div>
                </div>
              </div>
              <div className="t9-header-right">
                <div className="t9-contact-line">{formData.email || 'monica.12@gmail.com'}</div>
                <div className="t9-contact-line">{formData.phone || '(512) 465-6312'}</div>
              </div>
            </div>
            <div className="t9-header-divider"></div>
            <div className="t9-address">{formData.address || '77 Serial Drive, Austin, TX 78705, United States'}</div>
          </div>

          {/* BODY */}
          <div className="t9-body">
            {/* Tagline */}
            <div className="t9-tagline">
              {formData.tagline || 'Experienced and energetic Marketing Manager with over seven years of experience effectively managing marketing projects from conception to completion.'}
            </div>

            {/* Summary */}
            <p className="t9-summary">
              {formData.summary || 'Adept in using digital marketing platforms to increase sales and overall company productivity. Experienced in preparing and overseeing online and print marketing campaigns, resulting in an increase in partner relations for the company. Adept in monitoring and reporting marketing objectives, to maintain necessary internal communications within the company. Pragmatic and result oriented, I am determined to build market presence in the next company I join.'}
            </p>

            {/* Skills */}
            <div className="t9-skills-section">
              <div className="t9-skills-label">Skills</div>
              <div className="t9-skills-grid">
                {skillRows.map((row, ri) => (
                  <div key={ri} className="t9-skills-row">
                    {row.map((skill, si) => (
                      <div key={si} className="t9-skill-item">
                        <span className="t9-skill-dash">—</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Employment History */}
            <div className="t9-emp-section">
              <div className="t9-emp-label">Employment History</div>
              {displayExp.map((exp, i) => (
                <div key={i} className="t9-exp-entry">
                  <div className="t9-exp-left">
                    <div className="t9-exp-role">
                      {exp.role} at {exp.company}{exp.location ? `, ${exp.location}` : ''}
                    </div>
                    <div className="t9-exp-period">
                      {exp.from}{exp.to ? ` — ${exp.to}` : ''}
                    </div>
                  </div>
                  <div className="t9-exp-right">
                    <ul className="t9-bullets">
                      {(exp.bullets || '').split('\n').filter(Boolean).map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UseTemplatenine);
