import React, { useState, useCallback, memo } from 'react';
import './UseTemplatesix.css';
import { useNavigate } from 'react-router-dom';

const InputField = memo(({ label, type, name, value, onChange, placeholder }) => (
  <div className="t6-input-group">
    <label>{label}</label>
    {type === 'textarea' ? (
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} />
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    )}
  </div>
));

const DotRating = ({ level = 3 }) => (
  <div className="t6-dots">
    {[1,2,3,4,5].map(i => (
      <span key={i} className={`t6-dot ${i <= level ? 't6-dot-filled' : ''}`}></span>
    ))}
  </div>
);

const UseTemplatesix = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    subTitle: '',
    profile: '',
    email: '',
    phone: '',
    location: '',
    // skills: "Sales & Negotiation:4,Account Management:3,Market Research:2"
    skills: '',
    interests: '',
    // exp entries
    exp1Role: '', exp1Company: '', exp1Period: '', exp1Bullets: '',
    exp2Role: '', exp2Company: '', exp2Period: '', exp2Bullets: '',
    exp3Role: '', exp3Company: '', exp3Period: '', exp3Bullets: '',
    // education: "MA Communication | 20XX - 20XX\nNYU"
    education: '',
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
    const printable = document.querySelector('.t6-printable');
    const original = document.body.innerHTML;
    document.body.innerHTML = printable.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }, []);

  const handleBack = useCallback(() => navigate('/template'), [navigate]);

  // Parse skills: "Sales & Negotiation:4,Account Management:3"
  const parsedSkills = formData.skills
    ? formData.skills.split(',').map(s => {
        const parts = s.split(':');
        return { name: (parts[0] || '').trim(), level: parseInt(parts[1]) || 3 };
      }).filter(s => s.name)
    : [
        { name: 'Sales & Negotiation', level: 5 },
        { name: 'Account Management', level: 3 },
        { name: 'Market Research', level: 3 },
      ];

  const interestsList = formData.interests
    ? formData.interests.split('\n').filter(Boolean)
    : ['Knitting', 'Contemporary Dance'];

  const expEntries = [
    { role: formData.exp1Role, company: formData.exp1Company, period: formData.exp1Period, bullets: formData.exp1Bullets },
    { role: formData.exp2Role, company: formData.exp2Company, period: formData.exp2Period, bullets: formData.exp2Bullets },
    { role: formData.exp3Role, company: formData.exp3Company, period: formData.exp3Period, bullets: formData.exp3Bullets },
  ].filter(e => e.role || e.company);

  // Education: each entry is 2 lines — "Degree | Period\nSchool"
  const eduEntries = formData.education
    ? formData.education.split('\n\n').map(block => {
        const lines = block.split('\n');
        return { title: lines[0] || '', school: lines[1] || '' };
      }).filter(e => e.title)
    : [
        { title: 'MA COMMUNICATION | 20XX - 20XX', school: 'NYU' },
        { title: 'BA COMMUNICATION | 20XX - 20XX', school: 'NYU' },
        { title: 'HIGH SCHOOL DIPLOMA | 20XX - 20XX', school: 'NYU' },
      ];

  const defaultExp = [
    { role: 'ACCOUNT MANAGER', company: 'XYZ Company', period: 'Sept. 20XX – Jul. 20XX', bullets: 'Successfully managed a portfolio of key accounts, resulting in a 20% increase in revenue within the first year.' },
    { role: 'SENIOR SALES REPRESENTATIVE', company: 'ABC CORPORATION', period: 'Sept. 20XX – Jul. 20XX', bullets: 'Consistently achieved and exceeded quarterly sales targets.\nLed negotiations for a major contract, generating a 25% increase in annual revenue.' },
    { role: 'SALES ASSOCIATE', company: 'DEF SOLUTIONS', period: 'Sept. 20XX – Jul. 20XX', bullets: 'Initiated and nurtured relationships with potential clients.\nProvided product demonstrations and presentations to clients.' },
  ];

  const displayExp = expEntries.length > 0 ? expEntries : defaultExp;

  return (
    <div className="t6-container">
      {/* FORM */}
      <div className="t6-form non-printable">
        <h2>Build Your Resume</h2>
        <form>
          <div className="t6-sec-label">Personal Info</div>
          <InputField label="First Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. NAME" />
          <InputField label="Surname" type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="e.g. SURNAME" />
          <InputField label="Sub-title / Role" type="text" name="subTitle" value={formData.subTitle} onChange={handleChange} placeholder="e.g. Name Surname" />
          <div className="t6-input-group">
            <label>Profile Photo</label>
            <input type="file" accept="image/*" onChange={handlePhoto} />
          </div>

          <div className="t6-sec-label">Profile</div>
          <InputField label="Profile Summary" type="textarea" name="profile" value={formData.profile} onChange={handleChange} placeholder="Results-oriented account manager with 5+ years of experience..." />

          <div className="t6-sec-label">Contact</div>
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. name.sn@mail.com" />
          <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +1 222 222 222" />
          <InputField label="Location" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. New York" />

          <div className="t6-sec-label">Skills (format: Skill:level 1-5, ...)</div>
          <InputField label="Skills (e.g. Sales:4,Management:3)" type="textarea" name="skills" value={formData.skills} onChange={handleChange} placeholder="Sales & Negotiation:5,Account Management:3,Market Research:3" />

          <div className="t6-sec-label">Experience — Entry 1</div>
          <InputField label="Role / Title" type="text" name="exp1Role" value={formData.exp1Role} onChange={handleChange} placeholder="e.g. ACCOUNT MANAGER" />
          <InputField label="Company" type="text" name="exp1Company" value={formData.exp1Company} onChange={handleChange} placeholder="e.g. XYZ Company" />
          <InputField label="Period" type="text" name="exp1Period" value={formData.exp1Period} onChange={handleChange} placeholder="e.g. Sept. 20XX – Jul. 20XX" />
          <InputField label="Bullet Points (one per line)" type="textarea" name="exp1Bullets" value={formData.exp1Bullets} onChange={handleChange} placeholder="Successfully managed a portfolio of key accounts..." />

          <div className="t6-sec-label">Experience — Entry 2</div>
          <InputField label="Role / Title" type="text" name="exp2Role" value={formData.exp2Role} onChange={handleChange} placeholder="e.g. SENIOR SALES REPRESENTATIVE" />
          <InputField label="Company" type="text" name="exp2Company" value={formData.exp2Company} onChange={handleChange} placeholder="e.g. ABC CORPORATION" />
          <InputField label="Period" type="text" name="exp2Period" value={formData.exp2Period} onChange={handleChange} placeholder="e.g. Sept. 20XX – Jul. 20XX" />
          <InputField label="Bullet Points (one per line)" type="textarea" name="exp2Bullets" value={formData.exp2Bullets} onChange={handleChange} placeholder="Consistently achieved and exceeded quarterly sales targets..." />

          <div className="t6-sec-label">Experience — Entry 3</div>
          <InputField label="Role / Title" type="text" name="exp3Role" value={formData.exp3Role} onChange={handleChange} placeholder="e.g. SALES ASSOCIATE" />
          <InputField label="Company" type="text" name="exp3Company" value={formData.exp3Company} onChange={handleChange} placeholder="e.g. DEF SOLUTIONS" />
          <InputField label="Period" type="text" name="exp3Period" value={formData.exp3Period} onChange={handleChange} placeholder="e.g. Sept. 20XX – Jul. 20XX" />
          <InputField label="Bullet Points (one per line)" type="textarea" name="exp3Bullets" value={formData.exp3Bullets} onChange={handleChange} placeholder="Initiated and nurtured relationships with potential clients..." />

          <div className="t6-sec-label">Education</div>
          <InputField
            label="Education (each entry: Degree | Period on line 1, School on line 2 — separate entries with blank line)"
            type="textarea"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder={"MA COMMUNICATION | 20XX - 20XX\nNYU\n\nBA COMMUNICATION | 20XX - 20XX\nNYU"}
          />

          <div className="t6-sec-label">Interests</div>
          <InputField label="Interests (one per line)" type="textarea" name="interests" value={formData.interests} onChange={handleChange} placeholder={"Knitting\nContemporary Dance"} />
        </form>
      </div>

      {/* PREVIEW */}
      <div className="t6-preview non-printable">
        <div className="t6-preview-header">
          <h2>Resume Preview</h2>
          <div className="t6-preview-btns">
            <button onClick={handlePrint} className="t6-print-btn">Print Resume</button>
            <button onClick={handleBack} className="t6-back-btn">Back to Templates</button>
          </div>
        </div>

        <div className="t6-resume t6-printable">
          {/* LEFT SIDEBAR */}
          <div className="t6-sidebar">
            {/* Photo */}
            <div className="t6-photo-wrap">
              {photo
                ? <img src={photo} alt="Profile" className="t6-photo" />
                : <div className="t6-photo-placeholder"></div>
              }
            </div>

            {/* Profile */}
            <div className="t6-sb-section">
              <div className="t6-sb-title">PROFILE</div>
              <div className="t6-sb-divider"></div>
              <p className="t6-sb-text">
                {formData.profile || 'Results-oriented account manager with over 5 years of experience in driving revenue growth and building lasting relationships. Proven track record of exceeding target sales strategies.'}
              </p>
            </div>

            {/* Contact */}
            <div className="t6-sb-section">
              <div className="t6-sb-title">CONTACT</div>
              <div className="t6-sb-divider"></div>
              <div className="t6-contact-item">
                <span className="t6-icon">✉</span>
                <span>{formData.email || 'name.sn@mail.com'}</span>
              </div>
              <div className="t6-contact-item">
                <span className="t6-icon">✆</span>
                <span>{formData.phone || '+1 222 222 222'}</span>
              </div>
              <div className="t6-contact-item">
                <span className="t6-icon">⚲</span>
                <span>{formData.location || 'New York'}</span>
              </div>
            </div>

            {/* Skills */}
            <div className="t6-sb-section">
              <div className="t6-sb-title">SKILLS</div>
              <div className="t6-sb-divider"></div>
              {parsedSkills.map((s, i) => (
                <div key={i} className="t6-skill-entry">
                  <div className="t6-skill-name">{s.name}</div>
                  <DotRating level={s.level} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MAIN */}
          <div className="t6-main">
            {/* Dark header */}
            <div className="t6-main-header">
              <div className="t6-main-name">
                <span className="t6-first-name">{formData.name || 'NAME'}</span>
                <span className="t6-last-name">{formData.surname || 'SURNAME'}</span>
              </div>
              <div className="t6-main-subtitle">{formData.subTitle || 'NAME SURNAME'}</div>
            </div>

            {/* Body */}
            <div className="t6-main-body">
              {/* Professional Experience */}
              <div className="t6-main-section">
                <div className="t6-main-sec-title">PROFESSIONAL EXPERIENCE</div>
                <div className="t6-main-divider"></div>
                {displayExp.map((exp, i) => (
                  <div key={i} className="t6-exp-entry">
                    <div className="t6-exp-role">
                      {exp.role}<span className="t6-exp-sep"> | </span>
                      <span className="t6-exp-company">{exp.company}</span>
                    </div>
                    <div className="t6-exp-period">{exp.period}</div>
                    <ul className="t6-exp-bullets">
                      {(exp.bullets || '').split('\n').filter(Boolean).map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="t6-main-section">
                <div className="t6-main-sec-title">EDUCATION</div>
                <div className="t6-main-divider"></div>
                {eduEntries.map((edu, i) => (
                  <div key={i} className="t6-edu-entry">
                    <div className="t6-edu-title">
                      <span className="t6-edu-dot">●</span>
                      {edu.title}
                    </div>
                    <div className="t6-edu-school">{edu.school}</div>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div className="t6-main-section">
                <div className="t6-main-sec-title">INTERESTS</div>
                <div className="t6-main-divider"></div>
                <ul className="t6-interests-list">
                  {interestsList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UseTemplatesix);
