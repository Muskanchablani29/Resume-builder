import React, { useState, useCallback } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import "./UseTemplatefour.css"; // Assuming you're adding the CSS here

function App() {
  const resumeRef = useRef(null);

  // Add these functions for handling print and download

const handlePrint = useCallback(() => {
  const printArea = document.querySelector('#print-area');
  const originalDisplay = printArea.style.display;

  // Show the print area
  printArea.style.display = 'block';

  // Print the page
  window.print();

  // Hide the print area again
  printArea.style.display = originalDisplay;
}, []);
 
  const handleDownload = useCallback(async () => {
    const resume = resumeRef.current;
    if (!resume) return;
  
    try {
      // First, create the canvas with better quality settings
      const canvas = await html2canvas(resume, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: resume.scrollWidth,
        windowHeight: resume.scrollHeight
      });
  
      // Get the canvas dimensions
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      // Create PDF with proper dimensions
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Add the image to PDF with calculated dimensions
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0),
        'JPEG',
        0,
        0,
        imgWidth,
        imgHeight
      );
  
      // Save the PDF
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    Phone: "",
    profession: "",
    Email: "",
    Objective: "",
    skills: "",
    experience: "",
    education: "",
    Address: "",
    DOB: "",
    ref: "",
    Pskills: "",
    Achievements: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="container-templatefour">
      {/* Form Section */}
      <div className="form-section">
        <h2>Fill Your Details</h2>
        <form>
          <div className="formdata">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="Phone">Phone:</label>
          <input
            type="tel"
            id="Phone"
            placeholder="Enter your Phone Number"
            value={formData.Phone}
            onChange={handleInputChange}
          />
          </div>
          <div className="formdata">
          <label htmlFor="Address">Address:</label>
          <input
            type="text"
            id="Address"
            placeholder="Enter your Address Here"
            value={formData.Address}
            onChange={handleInputChange}
          />
          <label htmlFor="DOB">Date of Birth:</label>
          <input
            type="date"
            id="DOB"
            placeholder="Enter your Date of Birth"
            value={formData.DOB}
            onChange={handleInputChange}
          />
          </div>
          <div className="formdata">          
            <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            id="profession"
            placeholder="Enter your profession"
            value={formData.profession}
            onChange={handleInputChange}
          />

          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            id="Email"
            placeholder="Enter your Email"
            value={formData.Email}
            onChange={handleInputChange}
          />
          </div>
          <div className="refer">
          <label htmlFor="ref">Reference:</label>
          <input
            type="text"
            id="ref"
            placeholder="Enter Reference"
            value={formData.ref}
            onChange={handleInputChange}
          />
          </div>

          <label htmlFor="Objective">Career Objective:</label>
          <textarea
            id="Objective"
            placeholder="Write your Career Objective Here"
            rows="4"
            value={formData.Objective}
            onChange={handleInputChange}
          ></textarea>

          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            placeholder="List your skills (comma separated)"
            rows="3"
            value={formData.skills}
            onChange={handleInputChange}
          ></textarea>

          <label htmlFor="Pskills">Personal Skills:</label>
          <textarea
            id="Pskills"
            placeholder="List your Personal skills (comma separated)"
            rows="3"
            value={formData.Pskills}
            onChange={handleInputChange}
          ></textarea>

          <label htmlFor="experience">Experience:</label>
          <textarea
            id="experience"
            placeholder="Describe your experience"
            rows="3"
            value={formData.experience}
            onChange={handleInputChange}
          ></textarea>

          <label htmlFor="education">Education:</label>
          <textarea
            id="education"
            placeholder="Describe your education"
            rows="3"
            value={formData.education}
            onChange={handleInputChange}
          ></textarea>
        
        <label htmlFor="Achievements">Achievements:</label>
          <textarea
            id="Achievements"
            placeholder="List your Achevements here (Comma Separated Here)"
            rows="3"
            value={formData.Achievements}
            onChange={handleInputChange}
          ></textarea>
          </form>
      </div>

      {/* Preview Section */}
      <div className="preview-section" ref={resumeRef}>
        <div className="button-container">
          <button className="action-button print-button" onClick={handlePrint}>
            <span className="button-icon">🖨️</span>
            Print Resume
          </button>
          <button className="action-button download-button" onClick={handleDownload}>
            <span className="button-icon">⬇️</span>
            Download PDF
          </button>
        </div>
        <div className="resume-preview" id="print-area">
          {/* Header */}
          <div className="top-section">
            <div className="top-section-con">
              <p><strong>Phone:</strong>{formData.Phone || "Your Phone Number"}</p>
              <p><strong>Email:</strong><span>{formData.Email || "Your Email"}</span></p>
            </div>
          </div>
          <div className="resume-header">
            <h1>{formData.name || "Your Name"}</h1>
            <div className="design"><div className="dot"></div><h2>{formData.profession || "Your Profession"}</h2><div className="dot"></div></div>
          </div>

          {/* /*Career Objective*/}
          <div className="career">
            <div className="career-left">
              <div className="career-left-two">
                <div className="box1">
                  <div className="career-left-one">
                  </div>
                  <h3>Career Objective</h3>
                </div>
                <p>{formData.Objective || "Your career objective will appear here..."}</p>
              </div>
            </div>
            <div className="career-right">
              <div className="career-right-one">
                <h5>Address:</h5>
                <p>{formData.Address || "Your Address "}</p>
              </div>
              <div className="career-right-two">
                <h5>Date of Birth</h5>
                <p>{formData.DOB || "Your Date of Birth"}</p>
              </div>
            </div>
          </div>


          {/* Skills */}
          <div className="skills-section">

            <div className="resume-section">
              <div className="technical-skills-top">
                <div className="career-left-one">
              </div>
              <h3>Technical Skills:</h3>
              </div>
              <ul>
                {(formData.skills || "Your Technical skills will appear here...")
                  .split(",")
                  .map((skill, index) => (
                    <li key={index}>{skill.trim()}</li>
                  ))}
              </ul>
            </div>
            <div className="reference">
              <h5>Reference</h5>
              <p>{formData.ref || "Reference by ....."}</p>
            </div>
          </div>

                  {/* {Personal Skills} */}
                  <div className="resume-section">
              <div className="Personal-skills-top">
                <div className="career-left-one">
              </div>
              <h3>Personal Skills:</h3>
              </div>
              <ul>
                {(formData.Pskills || "Your Personal skills will appear here...")
                  .split(",")
                  .map((Pskill, index) => (
                    <li key={index}>{Pskill.trim()}</li>
                  ))}
              </ul>
            </div>
    
          {/* Education */}
          <div className="resume-section">
          <div className="Education">
                <div className="career-left-one">
              </div>
              <h3>Education:</h3>
              </div>
            <p>{formData.education || "Your education details will appear here..."}</p>
          </div>
          <div className="Responsibilities">
            <div className="res-con-one">
                <h3>Achievements/ <br />Responsibilities</h3>
                <ul>
                {(formData.Achievements || "Your Achievements will appear here...")
                  .split(",")
                  .map((Achievements, index) => (
                    <li key={index}>{Achievements.trim()}</li>
                  ))}
              </ul>
            </div>
            <div className="res-con-two">
                  <h3>Pre-Professional <br />Experience</h3>
                  <p>{formData.experience || "Your Experience Will Appear here"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
