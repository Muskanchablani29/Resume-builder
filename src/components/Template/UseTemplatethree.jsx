import React, { useState, useCallback, memo } from 'react';
import './UseTemplatethree.css';
import { useNavigate } from 'react-router-dom';

const InputField = memo(({ label, type, name, value, onChange, placeholder }) => (
  <div className="t3-input-group">
    <label>{label}</label>
    {type === 'textarea' ? (
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} />
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    )}
  </div>
));

const SkillBar = ({ name, level }) => (
  <div className="t3-skill-row">
    <span className="t3-skill-name">{name}</span>
    <div className="t3-skill-bar-bg">
      <div className="t3-skill-bar-fill" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const UseTemplatethree = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    phone: '',
    email: '',
    web: '',
    profile: '',
    // skills: "SkillName:80,SkillName:60"
    skills: '',
    socialSkills: '',
    // experience entries
    exp1Title: '', exp1Company: '', exp1From: '', exp1To: '', exp1Desc: '',
    exp2Title: '', exp2Company: '', exp2From: '', exp2To: '', exp2Desc: '',
    exp3Title: '', exp3Company: '', exp3From: '', exp3To: '', exp3Desc: '',
    // education
    edu1Degree: '', edu1School: '', edu1Location: '', edu1Year: '',
    edu2Degree: '', edu2School: '', edu2Location: '', edu2Year: '',
    // awards
    award1Title: '', award1Year: '', award1Org: '', award1Desc: '',
    award2Title: '', award2Year: '', award2Org: '', award2Desc: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handlePrint = useCallback(() => {
    const printable = document.querySelector('.t3-printable');
    const original = document.body.innerHTML;
    document.body.innerHTML = printable.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }, []);

  const handleBack = useCallback(() => navigate('/template'), [navigate]);

  // Parse skills: "Photoshop:80,Illustrator:65"
  const parsedSkills = formData.skills
    ? formData.skills.split(',').map(s => {
        const [n, l] = s.split(':');
        return { name: (n || '').trim(), level: parseInt(l) || 60 };
      }).filter(s => s.name)
    : [
        { name: 'Photoshop', level: 85 },
        { name: 'Illustrator', level: 70 },
        { name: 'Corel Draw', level: 60 },
        { name: 'Microsoft Word', level: 75 },
        { name: 'Dreamweaver', level: 50 },
      ];

  const socialSkillsList = formData.socialSkills
    ? formData.socialSkills.split('\n').filter(Boolean)
    : ['Project Management', 'Organization', 'Planning & Spacing', 'Communication', 'Leadership'];

  const expEntries = [
    { title: formData.exp1Title, company: formData.exp1Company, from: formData.exp1From, to: formData.exp1To, desc: formData.exp1Desc },
    { title: formData.exp2Title, company: formData.exp2Company, from: formData.exp2From, to: formData.exp2To, desc: formData.exp2Desc },
    { title: formData.exp3Title, company: formData.exp3Company, from: formData.exp3From, to: formData.exp3To, desc: formData.exp3Desc },
  ].filter(e => e.title || e.company);

  const eduEntries = [
    { degree: formData.edu1Degree, school: formData.edu1School, location: formData.edu1Location, year: formData.edu1Year },
    { degree: formData.edu2Degree, school: formData.edu2School, location: formData.edu2Location, year: formData.edu2Year },
  ].filter(e => e.degree || e.school);

  const awardEntries = [
    { title: formData.award1Title, year: formData.award1Year, org: formData.award1Org, desc: formData.award1Desc },
    { title: formData.award2Title, year: formData.award2Year, org: formData.award2Org, desc: formData.award2Desc },
  ].filter(e => e.title);

  return (
    <div className="t3-container">
      {/* FORM */}
      <div className="t3-form non-printable">
        <h2>Build Your Resume</h2>
        <form>
          <div className="t3-form-section-title">Personal Info</div>
          <InputField label="Full Name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. ROBERT SMITH" />
          <InputField label="Job Title" type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="e.g. Web & Graphic Designer" />
          <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 0123-456-789" />
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. info@emske.com" />
          <InputField label="Website" type="text" name="web" value={formData.web} onChange={handleChange} placeholder="e.g. http://emske.com" />

          <div className="t3-form-section-title">Profile</div>
          <InputField label="Profile Summary" type="textarea" name="profile" value={formData.profile} onChange={handleChange} placeholder="Write a short profile about yourself..." />

          <div className="t3-form-section-title">Skills (format: SkillName:level, ...)</div>
          <InputField label="Skills (e.g. Photoshop:85,Illustrator:70)" type="textarea" name="skills" value={formData.skills} onChange={handleChange} placeholder="Photoshop:85,Illustrator:70,CSS:90" />

          <div className="t3-form-section-title">Social Skills</div>
          <InputField label="Social Skills (one per line)" type="textarea" name="socialSkills" value={formData.socialSkills} onChange={handleChange} placeholder="Project Management&#10;Communication&#10;Leadership" />

          <div className="t3-form-section-title">Experience — Entry 1</div>
          <InputField label="Job Title" type="text" name="exp1Title" value={formData.exp1Title} onChange={handleChange} placeholder="e.g. Web and Graphic Designer" />
          <InputField label="Company" type="text" name="exp1Company" value={formData.exp1Company} onChange={handleChange} placeholder="e.g. Apple Inc." />
          <InputField label="From" type="text" name="exp1From" value={formData.exp1From} onChange={handleChange} placeholder="e.g. 2009" />
          <InputField label="To" type="text" name="exp1To" value={formData.exp1To} onChange={handleChange} placeholder="e.g. 2015" />
          <InputField label="Description" type="textarea" name="exp1Desc" value={formData.exp1Desc} onChange={handleChange} placeholder="Describe your responsibilities..." />

          <div className="t3-form-section-title">Experience — Entry 2</div>
          <InputField label="Job Title" type="text" name="exp2Title" value={formData.exp2Title} onChange={handleChange} placeholder="e.g. Programmer Junior" />
          <InputField label="Company" type="text" name="exp2Company" value={formData.exp2Company} onChange={handleChange} placeholder="e.g. Samsung Corp." />
          <InputField label="From" type="text" name="exp2From" value={formData.exp2From} onChange={handleChange} placeholder="e.g. 2007" />
          <InputField label="To" type="text" name="exp2To" value={formData.exp2To} onChange={handleChange} placeholder="e.g. 2009" />
          <InputField label="Description" type="textarea" name="exp2Desc" value={formData.exp2Desc} onChange={handleChange} placeholder="Describe your responsibilities..." />

          <div className="t3-form-section-title">Experience — Entry 3</div>
          <InputField label="Job Title" type="text" name="exp3Title" value={formData.exp3Title} onChange={handleChange} placeholder="e.g. Web Designer" />
          <InputField label="Company" type="text" name="exp3Company" value={formData.exp3Company} onChange={handleChange} placeholder="e.g. Sony Inc." />
          <InputField label="From" type="text" name="exp3From" value={formData.exp3From} onChange={handleChange} placeholder="e.g. 2005" />
          <InputField label="To" type="text" name="exp3To" value={formData.exp3To} onChange={handleChange} placeholder="e.g. 2007" />
          <InputField label="Description" type="textarea" name="exp3Desc" value={formData.exp3Desc} onChange={handleChange} placeholder="Describe your responsibilities..." />

          <div className="t3-form-section-title">Education — Entry 1</div>
          <InputField label="Degree & Field" type="text" name="edu1Degree" value={formData.edu1Degree} onChange={handleChange} placeholder="e.g. Masters Degree in Design" />
          <InputField label="School / University" type="text" name="edu1School" value={formData.edu1School} onChange={handleChange} placeholder="e.g. Humboldt University" />
          <InputField label="Location" type="text" name="edu1Location" value={formData.edu1Location} onChange={handleChange} placeholder="e.g. Berlin, Germany" />
          <InputField label="Year" type="text" name="edu1Year" value={formData.edu1Year} onChange={handleChange} placeholder="e.g. 2014" />

          <div className="t3-form-section-title">Education — Entry 2</div>
          <InputField label="Degree & Field" type="text" name="edu2Degree" value={formData.edu2Degree} onChange={handleChange} placeholder="e.g. Bachelors Degree in Design" />
          <InputField label="School / University" type="text" name="edu2School" value={formData.edu2School} onChange={handleChange} placeholder="e.g. UCLAN" />
          <InputField label="Location" type="text" name="edu2Location" value={formData.edu2Location} onChange={handleChange} placeholder="e.g. Preston, Lancashire, UK" />
          <InputField label="Year" type="text" name="edu2Year" value={formData.edu2Year} onChange={handleChange} placeholder="e.g. 2012" />

          <div className="t3-form-section-title">Awards & Honors — Entry 1</div>
          <InputField label="Award Title" type="text" name="award1Title" value={formData.award1Title} onChange={handleChange} placeholder="e.g. Best Music Talent" />
          <InputField label="Year & Organization" type="text" name="award1Year" value={formData.award1Year} onChange={handleChange} placeholder="e.g. 2010 – You Sustance ABC TV" />
          <InputField label="Description" type="textarea" name="award1Desc" value={formData.award1Desc} onChange={handleChange} placeholder="Brief description..." />

          <div className="t3-form-section-title">Awards & Honors — Entry 2</div>
          <InputField label="Award Title" type="text" name="award2Title" value={formData.award2Title} onChange={handleChange} placeholder="e.g. Best Nature Photo" />
          <InputField label="Year & Organization" type="text" name="award2Year" value={formData.award2Year} onChange={handleChange} placeholder="e.g. 2012 – National Geographic" />
          <InputField label="Description" type="textarea" name="award2Desc" value={formData.award2Desc} onChange={handleChange} placeholder="Brief description..." />
        </form>
      </div>

      {/* PREVIEW */}
      <div className="t3-preview non-printable">
        <div className="t3-preview-header">
          <h2>Resume Preview</h2>
          <div className="t3-preview-btns">
            <button onClick={handlePrint} className="t3-print-btn">Print Resume</button>
            <button onClick={handleBack} className="t3-back-btn">Back to Templates</button>
          </div>
        </div>

        <div className="t3-resume t3-printable">
          {/* CV label top-right */}
          <div className="t3-cv-label">CURRICULUM VITAE</div>

          {/* Name & Title */}
          <div className="t3-name-block">
            <h1>{formData.name || 'ROBERT SMITH'}</h1>
            <div className="t3-subtitle">{formData.jobTitle || 'WEB & GRAPHIC DESIGNER'}</div>
          </div>

          {/* Contact bar */}
          <div className="t3-contact-bar">
            <span><strong>PHONE</strong> {formData.phone || '0123-456-789'}</span>
            <span className="t3-bar-sep">/</span>
            <span><strong>EMAIL</strong> {formData.email || 'info@emske.com'}</span>
            <span className="t3-bar-sep">/</span>
            <span><strong>WEB</strong> {formData.web || 'http://emske.com'}</span>
          </div>

          {/* 3-column section */}
          <div className="t3-three-col">
            <div className="t3-col">
              <div className="t3-sec-title">#PROFILE</div>
              <p className="t3-profile-text">
                {formData.profile || 'Seitan asymmetrical banjo blog street art hella actually. Brooklyn freegan put a bird on it health goth quinoa crucifix wolf. Marfa aesthetic photo booth viral flannel drinking vinegar.'}
              </p>
            </div>
            <div className="t3-col">
              <div className="t3-sec-title">#SKILLS</div>
              <div className="t3-skills-list">
                {parsedSkills.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} />)}
              </div>
            </div>
            <div className="t3-col">
              <div className="t3-sec-title">#SOCIAL SKILLS</div>
              <ul className="t3-social-list">
                {socialSkillsList.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>

          {/* 2-column lower section */}
          <div className="t3-two-col">
            {/* Left: Experience */}
            <div className="t3-left-col">
              <div className="t3-sec-title">#EXPERIENCE</div>
              {(expEntries.length > 0 ? expEntries : [
                { title: 'Web and Graphic Designer in Apple Inc.', company: '', from: '2009', to: '2015', desc: 'Heirloom small batch single-origin coffee tote truck Marfa. Meditation craft beer freegan Odd Future cornhole. Banjo normcore single-origin irony Etsy bitters retro roof party.' },
                { title: 'Programmer Junior in Samsung Corp.', company: '', from: '2009', to: '2015', desc: 'Gluten-free chambray Tonx iPhone. Hoodie retro pork belly fixie seitan, +1 irony. Kogi Banksy heirloom single-origin coffee, Iroy selvage tap Brooklyn squid VHS normcore.' },
                { title: 'Web Designer in Sony Inc.', company: '', from: '2009', to: '2015', desc: 'Wost gastropub locavore, cred meditation from messenger bag cray viral literally sriracha chillwave ugh. Bespoke pickled roof party.' },
              ]).map((exp, i) => (
                <div className="t3-exp-entry" key={i}>
                  <div className="t3-exp-header">
                    <span className="t3-exp-title">
                      {exp.title}{exp.company ? ` in ${exp.company}` : ''}
                    </span>
                    {(exp.from || exp.to) && (
                      <span className="t3-exp-dates">{exp.from}{exp.to ? `–${exp.to}` : ''}</span>
                    )}
                  </div>
                  <p className="t3-exp-desc">{exp.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Education + Awards */}
            <div className="t3-right-col">
              <div className="t3-sec-title">#EDUCATION</div>
              {(eduEntries.length > 0 ? eduEntries : [
                { degree: 'Masters Degree in Design', school: 'Humboldt University', location: 'Berlin, Germany', year: '2014' },
                { degree: 'Bachelors Degree in Design', school: 'UCLAN', location: 'Preston, Lancashire, UK', year: '2012' },
              ]).map((edu, i) => (
                <div className="t3-edu-entry" key={i}>
                  <div className="t3-edu-degree">{edu.degree}</div>
                  <div className="t3-edu-school">{edu.school}</div>
                  <div className="t3-edu-loc">{edu.location}{edu.year ? ` | ${edu.year}` : ''}</div>
                </div>
              ))}

              <div className="t3-sec-title t3-awards-title">#AWARDS &amp; HONORS</div>
              {(awardEntries.length > 0 ? awardEntries : [
                { title: 'Best music talent', year: '2010 – You Sustance ABC TV', desc: 'Banjo narwhal single origin coffee, scenester irony Etsy bitters retro roof party. Gluten-free chambray Tonx iPhone.' },
                { title: 'Best Nature Photo', year: '2012 – National Geographic', desc: 'Banjo narwhal single origin coffee, scenester irony Etsy bitters retro roof party. Gluten-free chambray Tonx iPhone.' },
              ]).map((award, i) => (
                <div className="t3-award-entry" key={i}>
                  <div className="t3-award-title">{award.title}</div>
                  <div className="t3-award-year">{award.year}</div>
                  <p className="t3-award-desc">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UseTemplatethree);
