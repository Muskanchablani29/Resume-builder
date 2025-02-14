import React, { useState } from "react";
import html2pdf from 'html2pdf.js';
import "./UseTemplateseven.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    summary: "",
    phone: "",
    email: "",
    address: "",
    skills: "",
    references: "",
    education: "",
    Edetails1: "",
    Edetails2: "",
    Edetails3: "",
    photo: null,
  });

  const [isDownloading, setIsDownloading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadResume = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById('resume-preview');
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `${formData.name.trim() || 'resume'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait'
        }
      };
      await html2pdf().from(element).set(opt).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Resume Builder</h2>
        <form>
  <div className="form-row">
    <div className="form-group">
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Phone:</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <label>Skills:</label>
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleInputChange}
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group full-width">
      <label>Summary:</label>
      <textarea
        name="summary"
        value={formData.summary}
        onChange={handleInputChange}
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Branch Customer Service Representative:</label>
      <input
        type="text"
        name="Edetails1"
        value={formData.Edetails1}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <label>Customer Service Representative:</label>
      <input
        type="text"
        name="Edetails2"
        value={formData.Edetails2}
        onChange={handleInputChange}
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Customer Sales Representative:</label>
      <input
        type="text"
        name="Edetails3"
        value={formData.Edetails3}
        onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <label>References:</label>
      <input
        name="references"
        value={formData.references}
        onChange={handleInputChange}
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group full-width">
      <label>Education:</label>
      <textarea
        name="education"
        value={formData.education}
        onChange={handleInputChange}
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Upload Photo:</label>
      <input type="file" accept="image/*" onChange={handlePhotoUpload} />
    </div>
  </div>

  <button 
    type="button" 
    className="download-btn"
    onClick={downloadResume}
    disabled={isDownloading}
  >
    {isDownloading ? 'Generating PDF...' : 'Download Resume'}
  </button>
</form>

      </div> 
      <div className="preview-container">
        <div id="resume-preview" className="resume-preview">
          <div className="seven-resume-left">
            <div className="photo-container">
              <img src={formData.photo} alt="" className="profile-photo" />
            </div>
            <h1>{formData.name || "Your Name"}</h1>
            <p>{formData.title || "Your Title"}</p>
            <div className="details-left">
              <h1>Details</h1>
              <p>{formData.address || "Your Address"}</p>
              <p>{formData.phone || "Your Phone"}</p>
              <p>{formData.email || "Your Email"}</p>
              <h3>Skills</h3>
              <ul>
                {formData.skills
                  ? formData.skills.split(",").map((skill, index) => (
                      <li key={index}>{skill.trim()}</li>
                    ))
                  : "Your skills will appear here."}
              </ul>
            </div>
          </div>
          <div className="seven-resume-right">
            <h3>Profile</h3>
            <p>{formData.summary || "Your professional summary goes here."}</p>
            <hr />
            <h3>Employment History</h3>
            <h6>Branch Customer Service Representative, AT&T Inc. Seattle</h6>
            <ul>
              {formData.Edetails1
                ? formData.Edetails1.split(",").map((details, index) => (
                    <li key={index}>{details.trim()}</li>
                  ))
                : "Your Employment Details will appear here."}
            </ul>
            <h6>Customer Service Representative, Gold Coast Hotel. Seattle</h6>
            <ul>
              {formData.Edetails2
                ? formData.Edetails2.split(",").map((details2, index) => (
                    <li key={index}>{details2.trim()}</li>
                  ))
                : "Your Employment Details will appear here."}
            </ul>
            <h6>Customer Sales Representative</h6>
            <ul>
              {formData.Edetails3
                ? formData.Edetails3.split(",").map((details3, index) => (
                    <li key={index}>{details3.trim()}</li>
                  ))
                : "Your Employment Details will appear here."}
            </ul>
            <hr />
            <h3>Education</h3>
            <p>{formData.education || "Your education details."}</p>
            <hr />
            <h3>References</h3>
            <p>{formData.references || "References..........."}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
