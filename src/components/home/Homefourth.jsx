import React from 'react'
import './Homefourth.css'
import image1 from '../Images/Load1.png'
import image2 from '../Images/Load2.jpg'
import image3 from '../Images/Load3.jpg'
import image4 from '../Images/Load4.png'
import image5 from '../Images/Pdf.png'
import image6 from '../Images/Doc.png'
import image7 from '../Images/Image_Resume.jpg'

export default function Homefourth() {
  return (
    <>
    <main className="Home_fourth">
        <div className="Home4_content">
            <header className="Home_fourth_top">
                <h1>How to Build a Resume</h1>
                <p>The resume building process is simple and intuitive: Five easy steps is all it takes to get from
                    start to finish. Resume writing can be time-consuming. So, our resume tools and guides are designed
                    to save as much of your time as possible.</p>
                <button type="button">Build My Resume</button>
            </header>

            <div className="Home_fourth_content">
                <div className="Content_right">
                    <div className="image_container">
                        <img src={image6} className="img_doc" alt="" height="120px" width="120px" />
                        <div className="img1">
                            <img src={image7} className="img_bg" alt="" height="220px" width="180px" />
                            <img src={image1} alt="Resume template" className="img_res" loading="lazy" width="200"
                                height="240" decoding="async" />
                        </div>
                        <div className="img2">
                            <img src={image2} alt="Resume example" className="img_load2" loading="lazy" width="180"
                                height="240" decoding="async" />

                        </div>

                    </div>

                    <div className="image_container">
                        <div className="img3">

                            <img src={image3} alt="Resume sample" className="img3" loading="lazy" width="180"
                                height="240" decoding="async" />

                        </div>
                        <img src={image4} alt="Resume template" className="img4" loading="lazy" width="180" height="240"
                            decoding="async" />
                        <img src={image5} className="img_pdf" height="80px" width="80px" />
                    </div>
                </div>
                <div className="content_left">
                    <div className="Step1">
                        
                        <h2>Begin with Choosing a Template</h2>
                        <p>Find one of our elegant, expertly crafted templates that suit your taste, profession and
                            employer's image.</p>
                    </div>
                    <div className="Step1">
                        <h2>Add your personal info</h2>
                        <p>Fill in your contact information so that your resume performs as your personal ambassador.
                            Never worry about it getting lost among other candidates, as our powerful,
                            attention-grabbing headers help recruiters visually identify your document among many
                            others.</p>
                    </div>
                    <div className="Step1">
                        <h2>Fill in the sections</h2>
                        <p>Write or generate a short summary, fill in the bullet points of your employment history,
                            education and skills. We’ll help you with great visual functions and tips. All of the
                            sections are easy to complete and require minimal effort. Compared to traditional text
                            editing software, resume creation with our builder is easy and convenient. Save time, make
                            use of powerful visualizations and clean formatting!</p>
                    </div>
                    <div className="Step1">
                        <h2>Customize the layout</h2>
                        <p>Custom-tailor the design and structure of your resume in just a few clicks. You can also add
                            any special sections if you want or need them. Awards? Certifications? Honors? If you have
                            them, we’ll help you list them. Font sizes and colors are customizable as well.</p>
                    </div>
                    <div className="Step1">
                        <h2>Download in multiple file formats</h2>
                        <p>Resume.com provides PDF or Word exports, depending on your needs and the demands of the
                            employer. You can also share your resume directly online. Now, you’re ready to build your
                            cover letter, search and apply for jobs using our job tracker, the listing service of your
                            choice and send it directly to your employer / hiring contact. That’s it. Just easy editing,
                            beautiful design and excellent resume formatting provided by us!</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
