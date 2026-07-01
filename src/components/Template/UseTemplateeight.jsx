import React, { useState, useCallback, memo } from 'react';
import './UseTemplateeight.css';
import { useNavigate } from 'react-router-dom';

const InputField = memo(({ label, type, name, value, onChange, placeholder }) => (
  <div className="t8-input-group">
    <label>{label}</label>
    {type === 'textarea' ? (
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} />
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    )}
  </div>
));

const UseTemplateeight = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    address: '',
    phone: '',
    email: '',
    profile: '',
    // skills: one per line
    skills: '',
    // languages: one per line
    languages: '',
    // exp entries
    exp1Role: '', exp1Company: '', exp1Location: '', exp1From: '', exp1To: '', exp1Bullets: '',
    exp2Role: '', exp2Company: '', exp2Location: '', exp2From: '', exp2To: '', exp2Bullets: '',
    // education entries
    edu1Degree: '', edu1School: '', edu1Location: '', edu1From: '', edu1To: '',
    edu2Degree: '', edu2School: '', edu2Location: '', edu2From: '', edu2To: '',
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
    const printable = document.querySelector('.t8-printable');
    const original = document.body.innerHTML;
    document.body.innerHTML = printable.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }, []);

  const handleBack = useCallback(() => navigate('/template'), [navigate]);

  const skillsList = formData.skills
    ? formData.skills.split('\n').filter(Boolean)
    : ['Excellent Communication Skills', 'Multitasking Skills', 'Office Technology Skills', 'Scheduling Skills', 'Bookkeeping Skills', 'Customer Service Skills'];

  const languagesList = formData.languages
    ? formData.languages.split('\n').filter(Boolean)
    : ['Italian', 'French', 'Spanish'];

  const expEntries = [
    { role: formData.exp1Role, company: formData.exp1Company, location: formData.exp1Location, from: formData.exp1From, to: formData.exp1To, bullets: formData.exp1Bullets },
    { role: formData.exp2Role, company: formData.exp2Company, location: formData.exp2Location, from: formData.exp2From, to: formData.exp2To, bullets: formData.exp2Bullets },
  ].filter(e => e.role || e.company);

  const eduEntries = [
    { degree: formData.edu1Degree, school: formData.edu1School, location: formData.edu1Location, from: formData.edu1From, to: formData.edu1To },
    { degree: formData.edu2Degree, school: formData.edu2School, location: formData.edu2Location, from: formData.edu2From, to: formData.edu2To },
  ].filter(e => e.degree || e.school);

  const defaultExp = [
    {
      role: 'Receptionist', company: 'Alfred Young Design', location: 'San Francisco',
      from: 'November 2014', to: 'August 2019',
      bullets: 'Greeted clients and provided them with information and superior service.\nHandled calls, collected personal information, and managed schedules.\nMaintained accurate client records and provided lead designers with excellent assistance.\nManaged the office database, mail, payroll distribution, and the physical setting of the front office.'
    },
    {
      role: 'Receptionist', company: 'Little Star Day Spa', location: 'Los Angeles',
      from: 'June 2003', to: 'October 2014',
      bullets: 'Answered phone calls, greeted clients, and handled all front desk responsibilities.\nDecorated the front reception area, contributing to the welcoming and peaceful environment of the spa.\nHandled spa orders, mail, and some accounting responsibilities.\nProvided clients and prospective clients with information regarding services, spa technology, and products offered.'
    },
  ];

  const defaultEdu = [
    { degree: 'Associate of Communications', school: 'Pierce College', location: 'Los Angeles', from: 'August 2003', to: 'May 2005' },
    { degree: 'High School Diploma', school: 'Maria Regina High School', location: 'Sherman Oaks', from: 'September 1999', to: 'June 2003' },
  ];

  const displayExp = expEntries.length > 0 ? expEntries : defaultExp;
  const displayEdu = eduEntries.length > 0 ? eduEntries : defaultEdu;

  return (
    <div className="t8-container">
      {/* FORM */}
      <div className="t8-form non-printable">
        <h2>Build Your Resume</h2>
        <form>
          <div className="t8-sec-label">Personal Info</div>
          <InputField label="Full Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Patricia Giordano" />
          <InputField label="Job Title" type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="e.g. Receptionist" />
          <InputField label="Address" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="e.g. 3620 Ettlehorn Street, San Francisco, CA 94016, United States" />
          <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. (530)732-2544" />
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. hw12@gmail.com" />
          <div className="t8-input-group">
            <label>Profile Photo</label>
            <input type="file" accept="image/*" onChange={handlePhoto} />
          </div>

          <div className="t8-sec-label">Profile Summary</div>
          <InputField label="Profile" type="textarea" name="profile" value={formData.profile} onChange={handleChange} placeholder="Hardworking and experienced professional with several years of experience..." />

          <div className="t8-sec-label">Skills (one per line)</div>
          <InputField label="Skills" type="textarea" name="skills" value={formData.skills} onChange={handleChange} placeholder={"Excellent Communication Skills\nMultitasking Skills\nOffice Technology Skills"} />

          <div className="t8-sec-label">Languages (one per line)</div>
          <InputField label="Languages" type="textarea" name="languages" value={formData.languages} onChange={handleChange} placeholder={"Italian\nFrench\nSpanish"} />

          <div className="t8-sec-label">Experience — Entry 1</div>
          <InputField label="Role / Title" type="text" name="exp1Role" value={formData.exp1Role} onChange={handleChange} placeholder="e.g. Receptionist" />
          <InputField label="Company" type="text" name="exp1Company" value={formData.exp1Company} onChange={handleChange} placeholder="e.g. Alfred Young Design" />
          <InputField label="Location" type="text" name="exp1Location" value={formData.exp1Location} onChange={handleChange} placeholder="e.g. San Francisco" />
          <InputField label="From" type="text" name="exp1From" value={formData.exp1From} onChange={handleChange} placeholder="e.g. November 2014" />
          <InputField label="To" type="text" name="exp1To" value={formData.exp1To} onChange={handleChange} placeholder="e.g. August 2019" />
          <InputField label="Bullet Points (one per line)" type="textarea" name="exp1Bullets" value={formData.exp1Bullets} onChange={handleChange} placeholder="Greeted clients and provided them with information..." />

          <div className="t8-sec-label">Experience — Entry 2</div>
          <InputField label="Role / Title" type="text" name="exp2Role" value={formData.exp2Role} onChange={handleChange} placeholder="e.g. Receptionist" />
          <InputField label="Company" type="text" name="exp2Company" value={formData.exp2Company} onChange={handleChange} placeholder="e.g. Little Star Day Spa" />
          <InputField label="Location" type="text" name="exp2Location" value={formData.exp2Location} onChange={handleChange} placeholder="e.g. Los Angeles" />
          <InputField label="From" type="text" name="exp2From" value={formData.exp2From} onChange={handleChange} placeholder="e.g. June 2003" />
          <InputField label="To" type="text" name="exp2To" value={formData.exp2To} onChange={handleChange} placeholder="e.g. October 2014" />
          <InputField label="Bullet Points (one per line)" type="textarea" name="exp2Bullets" value={formData.exp2Bullets} onChange={handleChange} placeholder="Answered phone calls, greeted clients..." />

          <div className="t8-sec-label">Education — Entry 1</div>
          <InputField label="Degree" type="text" name="edu1Degree" value={formData.edu1Degree} onChange={handleChange} placeholder="e.g. Associate of Communications" />
          <InputField label="School" type="text" name="edu1School" value={formData.edu1School} onChange={handleChange} placeholder="e.g. Pierce College" />
          <InputField label="Location" type="text" name="edu1Location" value={formData.edu1Location} onChange={handleChange} placeholder="e.g. Los Angeles" />
          <InputField label="From" type="text" name="edu1From" value={formData.edu1From} onChange={handleChange} placeholder="e.g. August 2003" />
          <InputField label="To" type="text" name="edu1To" value={formData.edu1To} onChange={handleChange} placeholder="e.g. May 2005" />

          <div className="t8-sec-label">Education — Entry 2</div>
          <InputField label="Degree" type="text" name="edu2Degree" value={formData.edu2Degree} onChange={handleChange} placeholder="e.g. High School Diploma" />
          <InputField label="School" type="text" name="edu2School" value={formData.edu2School} onChange={handleChange} placeholder="e.g. Maria Regina High School" />
          <InputField label="Location" type="text" name="edu2Location" value={formData.edu2Location} onChange={handleChange} placeholder="e.g. Sherman Oaks" />
          <InputField label="From" type="text" name="edu2From" value={formData.edu2From} onChange={handleChange} placeholder="e.g. September 1999" />
          <InputField label="To" type="text" name="edu2To" value={formData.edu2To} onChange={handleChange} placeholder="e.g. June 2003" />
        </form>
      </div>

      {/* PREVIEW */}
      <div className="t8-preview non-printable">
        <div className="t8-preview-header">
          <h2>Resume Preview</h2>
          <div className="t8-preview-btns">
            <button onClick={handlePrint} className="t8-print-btn">Print Resume</button>
            <button onClick={handleBack} className="t8-back-btn">Back to Templates</button>
          </div>
        </div>

        <div className="t8-resume t8-printable">
          {/* GREEN HEADER */}
          <div className="t8-header">
            <div className="t8-header-photo">
              {photo
                ? <img src={photo} alt="Profile" className="t8-photo" />
                : <div className="t8-photo-placeholder"></div>
              }
            </div>
            <div className="t8-header-info">
              <div className="t8-header-name">{formData.name || 'Patricia Giordano'}</div>
              <div className="t8-header-title">{formData.jobTitle || 'Receptionist'}</div>
              <div className="t8-header-contact">
                <span>{formData.address || '3620 Ettlehorn Street, San Francisco, CA 94016, United States'}</span>
                <span className="t8-contact-row">
                  <span>{formData.phone || '(530)732-2544'}</span>
                  <span className="t8-contact-sep">  </span>
                  <span>{formData.email || 'hw12@gmail.com'}</span>
                </span>
              </div>
            </div>
          </div>

          {/* BODY: sidebar + main */}
          <div className="t8-body">
            {/* LEFT SIDEBAR */}
            <div className="t8-sidebar">
              <div className="t8-sb-section">
                <div className="t8-sb-title">Skills</div>
                {skillsList.map((s, i) => (
                  <div key={i} className="t8-skill-item">
                    <span>{s}</span>
                    <div className="t8-skill-line"></div>
                  </div>
                ))}
              </div>

              <div className="t8-sb-section t8-sb-languages">
                <div className="t8-sb-title">Languages</div>
                {languagesList.map((l, i) => (
                  <div key={i} className="t8-skill-item">
                    <span>{l}</span>
                    <div className="t8-skill-line"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT MAIN */}
            <div className="t8-main">
              {/* Profile */}
              <div className="t8-main-section">
                <div className="t8-main-sec-title">Profile</div>
                <p className="t8-profile-text">
                  {formData.profile || 'Hardworking and experienced Receptionist with several years of experience serving as a supportive and integral employee in high volume client settings. Experienced in creating schedules, making appointments, selling products, and providing clients with optimal customer service. Bringing forth the ability to manage front desk settings with poise and grace, in addition to managing a variety of administrative duties. Eager to join a new team of people, and assist them as a dedicated and passionate Receptionist.'}
                </p>
              </div>

              {/* Employment History */}
              <div className="t8-main-section">
                <div className="t8-main-sec-title">Employment History</div>
                {displayExp.map((exp, i) => (
                  <div key={i} className="t8-exp-entry">
                    <div className="t8-exp-heading">
                      {exp.role}{exp.company ? `, ${exp.company}` : ''}{exp.location ? `, ${exp.location}` : ''}
                    </div>
                    <div className="t8-exp-period">
                      {exp.from}{exp.to ? ` — ${exp.to}` : ''}
                    </div>
                    <ul className="t8-bullets">
                      {(exp.bullets || '').split('\n').filter(Boolean).map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="t8-main-section">
                <div className="t8-main-sec-title">Education</div>
                {displayEdu.map((edu, i) => (
                  <div key={i} className="t8-edu-entry">
                    <div className="t8-edu-heading">
                      {edu.degree}{edu.school ? `, ${edu.school}` : ''}{edu.location ? `, ${edu.location}` : ''}
                    </div>
                    <div className="t8-edu-period">
                      {edu.from}{edu.to ? ` — ${edu.to}` : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UseTemplateeight);
