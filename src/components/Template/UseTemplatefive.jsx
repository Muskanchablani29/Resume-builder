import React, { useState, useCallback, useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./UseTemplatefive.css";

function UseTemplatefive() {
  const resumeRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    title: "",
    summary: "",
    phone: "",
    email: "",
    address: "",
    skills: "",
    Cpost:"",
    Csummary:"",
    education: "",
    hobbies: "",
    Cname:"",
    Cyear:"",
    experience: "",
    photo: null,
  });

  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handlePrint = useCallback(() => {
    const printArea = document.querySelector('#resume-preview');
    if (!printArea) return;

    const originalDisplay = printArea.style.display;
    printArea.style.display = 'block';
    window.print();
    printArea.style.display = originalDisplay;
  }, []);

  const handleDownload = useCallback(async () => {
    const resume = resumeRef.current;
    if (!resume) {
      console.error('Resume element not found');
      return;
    }

    try {
      // Set specific dimensions for A4 page (297mm x 210mm)
      const a4Width = 210;
      const a4Height = 297;

      const canvas = await html2canvas(resume, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: resume.offsetWidth,
        height: resume.offsetHeight
      });

      // Create new PDF with A4 dimensions
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Calculate scaling to fit content properly on A4
      const imgWidth = a4Width;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // If content is longer than one page, create multiple pages
      let heightLeft = imgHeight;
      let position = 0;
      let pageNumber = 1;

      while (heightLeft >= 0) {
        // Add image to the page
        pdf.addImage(
          canvas.toDataURL('image/jpeg', 1.0),
          'JPEG',
          0,
          position,
          imgWidth,
          imgHeight
        );
        
        heightLeft -= a4Height;
        
        if (heightLeft > 0) {
          position -= a4Height;
          pdf.addPage();
          pageNumber++;
        }
      }

      // Save the PDF with a proper filename
      const filename = formData.name ? `${formData.name}_resume.pdf` : 'resume.pdf';
      pdf.save(filename);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  }, [formData.name]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevData => ({
          ...prevData,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeColor = (color) => {
    const colorValue = color === "007bff" ? "#007bff" : color;
    const elements = ["left-top", "left-top2", "left-top3", "left-top4", "left-top5", "left-top6"];
    elements.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.backgroundColor = colorValue;
      }
    });
  };

  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;
    setSelectedLanguages(prev =>
      checked
        ? [...prev, value]
        : prev.filter(lang => lang !== value)
    );
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Resume Builder</h2>
        <form>
          <div className="color-buttons">
            {[
              { color: "007bff", label: "Original" },
              { color: "yellow", label: "Yellow" },
              { color: "blue", label: "Blue" },
              { color: "green", label: "Green" },
              { color: "purple", label: "Purple" },
              { color: "orange", label: "Orange" },
              { color: "aqua", label: "Aqua" },
              { color: "red", label: "Red" },
              { color: "black", label: "Black" }
            ].map(({ color, label }) => (
              <button
                key={color}
                type="button"
                onClick={() => changeColor(color)}
                className={`color-button ${color}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Form inputs */}
          <div className="form-row">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Surname:</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder="Enter your surname"
              />
            </div>
          </div>

      <div className="form-row">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Hobbies:</label>
          <input
            type="text"
            name="hobbies"
            value={formData.hobbies}
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
        <div className="form-group languages">
          <label>Languages</label>
          <div className="language-options">
            {['Hindi', 'English', 'Spanish', 'French'].map((language) => (
              <div key={language} className="language-option">
                <input
                  type="checkbox"
                  id={language}
                  value={language}
                  onChange={handleLanguageChange}
                  checked={selectedLanguages.includes(language)}
                />
                <label htmlFor={language}>{language}</label>
              </div>
            ))}
          </div>
          <div className="selected-languages">
            <h4>Selected Languages:</h4>
            <ul>
              {selectedLanguages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
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
          <h3>Work Experience:</h3>
          <div className="work-exp-con">
          <div className="con-left"><label>Your Post:</label>
            <input type="text"
            name="Cpost"
            value={formData.Cpost}
            onChange={handleInputChange}
             />
            <label>Company Name:</label>
            <input type="text"
            name="Cname"
            value={formData.Cname}
            onChange={handleInputChange}
             /></div>
             <div className="con-right">
             <label>Duration:</label>
            <input type="tel"
            name="Cyear"
            value={formData.Cyear}
            onChange={handleInputChange}
             />
            <label>Summary:</label>
            <input type="text"
            name="Csummary"
            value={formData.Csummary}
            onChange={handleInputChange}
             /></div>
          </div>
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


    </form>
      </div >

      <div className="preview-container">
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
        <div id="resume-preview" className="resume-preview" ref={resumeRef}>
          <div className="five-resume-left">
            <div className="photo-container">
              <img src={formData.photo} alt="" className="profile-photo" />
            </div>

          <div className="details-left">
            <p id="left-top">Contact</p>
            <div className="phone">
              <div className="phone-con">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAtlJREFUWEftlk9IFHEUx79vZjciqERCSZ1xLaIgKCqxMDt4MAkSdFfmIh7qGAhBhXnzEkR1Cjp0Kjp00B1NIvpzqUuHtChEqkO67sy4iJZQdpDc37wYQbDZmd3Z3SkvvePM773v5/f9vXm/IWxy0Cbr4z9AXgdqdatVgt0LCdfMLnX6bxyXL4CiG5cA3AAgMXjBliONmc5aM2yIXICXHFGXjPsM6nGJzdgkNc3F676FCZEDUKebDwjc6yMyuSK2nlzUqn6GBZEDoOjGPIBqXwHCq+3Z5faP2sFfYUB4OTBL4Pq8xRlj5pQSxyDZ5UJ4OTABoLFQYQb1WwnFadKywsuBYQJ3B6j60Eyo7kYNkPbnklyApHmFiAvtbJEFNVua8qVoRVdC7hEkjUYQnGPwi4wk7Ja0FkuVK+7kew4iRTcWAezyEDCEiJzKaDVGGOK+AKqevs2gPreIkGU17Gno6UAsmTogSP7kBiBwi5Gofx3W7n0dcF4ouvECQJtL7JGZULv+CUDtiHVYYvtDjhjhvBlX7/lBqCPpfma6DGDYFEofNBL5gPNex4pu3AFwwVUgy0QdVlx55i5cp5vXCdy/4flz+YfonD3XsOIHkRdgz9D0zlU5+g7AXlcBJuIBY1K9uT6OFd24BcC5wt0xzoLOWJqy5AVR8JesZmhuvyyJcRB2uAsw6D2BRwFUArjot0sGfbZl6bTXF1QQYK0hk0Y7CE8AyGU04DwIbWZcndpYIxCAk6COpFuY6TGAijIgvq+K6L55bbcz6NYiMICzODaaiglb1gEcLRVCgn02nYg5bhYP4GQcu/s2urCrahDAQLEbADBhVirNaKVsyQDriWvNKYurAJwrORrAEUtsiRzJdNR8LakH/AQaxmaqs6uRHhA0AE1erhB4mYiPp+Mxj/EeAD3okthoqiLLkRNgHJJgb1vPs1l6anUrb0qaA0HFS11X1FdQqki+vE0H+A3bOuYhuNcZFQAAAABJRU5ErkJggg==" />
                <h5>Phone:</h5>
              </div>
              <p>{formData.phone || "Your Phone"}</p>
            </div>
            <div className="email">
              <div className="phone-con">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwpJREFUWEftl01IFGEYx//PjGlqkRdJZGd2gyQiCLoEfYAifUBp0M5mN6tLl8iDegi6dAkq+oAuYQTVHoJ0d1VEKDtUdKiL9EFUl1pn3jUrIVACcXXmidlmlt1RV9MRPfje9p1n/s/v/T/PMzNLWOFFK5wfawCrz4FAQtSSxfuJeJ3f/cFEY8Tca2jBb652ngOBuOgg8Fm/E3v0TCZqSIWVJ/Z+FqC6Z1iRTdNY5uSu/BuhqXvyANS4foBBz5yIB2zRQ79hSOK7AGoATAhNLcsDUGLGYRAytgCYIuJ2Ixy87QfE5uiP8uLy9CMAxxy9tNDUkkIAmTgGxWCiOdWkTCwWJBATNUTc75zclVkYgBP9WTKto3pTKPm/EErcsE9sn7zcc+9MADWhH2SmASewj8B1DNroWDEOCc0irPYuCKKTZUUSV0Boz44b8zsmsm3fDmBSaOr6/BJ0GYcg4amTsA0yeom5n5m2OSLMRFdTHwIXcYmsuUCqOkcqi+TpHgLvzYl5XFI6eWpyosTWrwUwSwk8ACKi3sw0T1k6CkI4R+wlmxRONSm/vRCBbrGbLLZdqnKuTRNxm9vMStx4MTdA/hS0C0294SZQY/oFJroMQHL2hiW2GvVI6G02JqG3MNN1AO4TdBQWNHFCfeXGLBrAFggmhuotluIAKtxRInCLZUpRyIgSOJLjyKAEq1HXQiO5LhUEyGtCQqsIq7e8Foe6kyHTkm2Ld+ZcGwVQmW028L0N5p9zn5p2pL335wDM0oQFSpArFOgUpSTzfQAnvaNF4POGFrSfdrOuJZVgxmliRisI1wDIAEZI4kbjeHCw0JguuQRecTWu72NQfTGlO76Gt/6a7xnhSwnmS7JoBzwvo7wxXErSBU/BigMEukQdSfw8Q0wYIObXfp3c1bEgnSZwEIxxEVE3/UvlrFB3ssK05J8Aiv1O7NVjUH9KUxryAOwfSsI4A8YdAJmPhWVaSZnNI0ORLV9mANgb1X3fy4rSU7ssS/L9q1gmc0z/GHyf+zZdff8Llsn2OWXXHPgLo9BpMIF4NhwAAAAASUVORK5CYII=" />
                <h5>Email:</h5>
              </div>
              <p>{formData.email || "Your Email"}</p></div>
            <div className="address">
              <div className="phone-con">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAnNJREFUWEftlktoE1EUhv8ziZIiDVILSs3cqagLHwsFqVB0oS50aTNRF0px4crWddGN4kIFwZWPlai0G2seRAXpQkEqgooUREEUbXLvWCjiqhbFJnMktU3ayeQxadK66Oxm7r3//90zZ/65hCW+aIn9sSCAtkdjrdpUdpv1LjSMC2TXspmaAdoTo6uztm8YwHYAt5QpTi8aQPud0UA26HsOoGPWlJnOWxH9olcI7xUYZJ/uU48BHHKaMeiUZeq3vUB4BhDxdD8znShhkuuDLmWKh9VCeALQY/ISgLMVxP8Q8QEZNl5UA1E1gB6XPWBcr06UJ5ioU4XF+0rzqwIQ8fQRZroPePpsx7NZf8fY0TZZDqIigBFP7bdZGwLgr7Qbl/EvNmm7v4VDP0qtLQtgRFM7bdJy3/qqGsynlzBoZGpyxd7x7nWTbholAfSE3AgbrwCsqdU8nxHgZ1aLOIh9lHFquQJsSH5dm8n4XwMQCzUvQNADKxw6BiKeq1kE0Jr83tyU+fVyJmLr5f9Ph3FDRURvSYCtgx9WTvianwLYU1/nghqBz0nTuDz7ZF4F9JhMADjcKPOCKXdL0+jP3ecB9KjcBcKbRpvP6Ctliun+ygNsGvgc/N0UeELgzgZDZAh8TZpG3zwAp+n6hLVDs+2ROsFYyhS6pxxYBvjfKzDENl0pilXiJAhBl3ctlSmM+vUA4Z4Ki5NOQT0mc3+9FhejOjfhMsBiVCAUVZuJ+FOJILqpTNHj0gO541dR4DDoo2XqWzw1YW6yiKUHGHTcsTBFGkdkl/HWKRiKql4ivgogMGfsJ4AzyhR3PQPUKYbLylQ8lDYa4i+ibPshKXmtOAAAAABJRU5ErkJggg==" />
                <h5>Address:</h5>
              </div>
              <p>{formData.address || "Your Address"}</p>
            </div>



            <p id="left-top2">Skills</p>

            <ul>
              {formData.skills
                ? formData.skills.split(",").map((skill, index) => (
                  <li key={index}>{skill.trim()}</li>
                ))
                : <li className="placeholder-text">Your skills will appear here.</li>}
            </ul>
            <div className="languages-section">
              <p id="left-top3">Languages</p>
              <ul>
                {selectedLanguages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
            <div className="hobbies">
              <p id="left-top6">Hobbies</p>
              <ul>
                {formData.hobbies
                  ? formData.hobbies.split(", ").map((hobby, index) => (
                    <li key={index}>{hobby.trim()}</li>
                  ))
                  : <li className="placeholder-text">Your hobbies will appear here.</li>}
              </ul>
            </div>
          </div>
        </div>
        <div className="five-resume-right">
          <div className="top-section-right">
            <h1>{formData.name || "Your Name"} <span>{formData.surname}</span></h1>
            <p>{formData.title || "Your Title"}</p>
            <p>{formData.summary || "Your professional summary goes here."}</p>
          </div>
          <div className="work-exp">
            <p id="left-top4">Work Experience</p>
            <h4>{formData.Cpost || "Your Job Title"}</h4>
            <p>{formData.Cname || "Company Name"}</p>
            <p>{formData.Cyear || "Duration"}</p>
            <p>{formData.Csummary || "Summary"}</p>
          </div>
          <div className="education">
            <p id="left-top5">Education</p>
            <p>{formData.education || "Your education details."}</p>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
}

export default UseTemplatefive;
