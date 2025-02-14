import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="About">
            <div className="about-top">
                <h1 className='top-heading'>
                    We're Proud to have helped nearly <br />
                    6 million people during their <br />
                    job search.
                </h1>
                <p>
                    We believe that the job search is hard enough. So we want to make resumes writing
                </p>
            </div>
            <div className="about-con">
                <div className="about-con-left">
                    <h2>Our Resume Builder Website is 100% <br /> free to Use</h2>
                    <p>
                        Our resume builder is free to use, and you can create as many resumes as you want.
                    </p>
                    <ul className="about-list">
                        <li>Build a professional resume backed by research with hundreds of employers.</li>
                        <li>Choose from smart resume templates that highlight your best qualities.</li>
                        <li>Print, download and share your resume instantly in flexible formats like PDF and .doc.</li>
                        <li>Share your resume with Indeed to easily apply to jobs.</li>
                        <li>Access professional resume examples formatted for specific jobs and industries.</li>
                        <li>Log in to your account to update your resume online.</li>
                        <li>Get free job search and career advice to help you build your resume and get the job.</li>
                    </ul>
                </div>
                <div className="about-con-right">
                    <div className="wrapper"></div>
                </div>
            </div>
        </div>
    );
}
