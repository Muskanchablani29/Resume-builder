import React from 'react';
import './Term.css';


const TermsAndConditions = () => {
  // const DateDisplay = () => { const currentDate = new Date().toLocaleDateString(); return ( <div> <p>Today's Date: {currentDate}</p> </div> ); };
  return (
    <div className="container">
      <h1 className="heading">Terms and Conditions</h1>
      <p className="paragraph">Effective Date: [Today Date]</p>
      
      <h2 className="subheading">1. Use of the Website</h2>
      <h3 className="subheading">1.1 Eligibility:</h3>
      <p className="paragraph">You must be at least 18 years old or the age of majority in your jurisdiction to use this Website.</p>
      
      <h3 className="subheading">1.2 Account Registration:</h3>
      <p className="paragraph">Some features may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
      
      <h3 className="subheading">1.3 Prohibited Activities:</h3>
      <ul className="list">
        <li>Use the Website for unlawful purposes or violate any applicable laws or regulations.</li>
        <li>Upload or distribute any harmful, offensive, or inappropriate content.</li>
        <li>Interfere with the Website’s security features or functionality.</li>
      </ul>
      
      <h2 className="subheading">2. Services</h2>
      <h3 className="subheading">2.1 Resume Builder Tool:</h3>
      <p className="paragraph">We provide tools to help you create professional resumes. You are solely responsible for the accuracy and completeness of the information you input into the tool.</p>
      
      <h3 className="subheading">2.2 Third-Party Integrations:</h3>
      <p className="paragraph">The Website may include links to third-party websites or services. We are not responsible for the content, policies, or practices of third-party platforms.</p>
      
      <h3 className="subheading">2.3 Service Availability:</h3>
      <p className="paragraph">We aim to keep the Website accessible but do not guarantee uninterrupted or error-free operation.</p>
      
      <h2 className="subheading">3. Payments and Subscriptions</h2>
      <h3 className="subheading">3.1 Pricing:</h3>
      <p className="paragraph">Certain features may require payment. Pricing details are provided at the point of purchase and are subject to change.</p>
      
      <h3 className="subheading">3.2 Subscriptions:</h3>
      <p className="paragraph">If you purchase a subscription, it will automatically renew at the end of the subscription period unless canceled before the renewal date. You can manage or cancel your subscription in your account settings.</p>
      
      <h3 className="subheading">3.3 Refund Policy:</h3>
      <p className="paragraph">Refund requests are subject to our <a href="#">Refund Policy</a>.</p>
      
      <h2 className="subheading">4. Intellectual Property</h2>
      <h3 className="subheading">4.1 Ownership:</h3>
      <p className="paragraph">All content, design, and functionality on the Website are the property of Resume.com and are protected by copyright, trademark, and other intellectual property laws.</p>
      
      <h3 className="subheading">4.2 User Content:</h3>
      <p className="paragraph">By submitting content through the Website, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and display your content for the purpose of providing our Services.</p>
      
      <h2 className="subheading">5. Privacy Policy</h2>
      <p className="paragraph">Your use of the Website is also governed by our <a href="#">Privacy Policy</a>, which explains how we collect, use, and protect your personal information.</p>
      
      <h2 className="subheading">6. Limitation of Liability</h2>
      <p className="paragraph">To the fullest extent permitted by law, [Your Website Name] and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or Services.</p>
      
      <h2 className="subheading">7. Termination</h2>
      <p className="paragraph">We reserve the right to suspend or terminate your access to the Website at our discretion for violations of these Terms or other legitimate reasons.</p>
      
      <h2 className="subheading">8. Changes to Terms</h2>
      <p className="paragraph">We may update these Terms from time to time. Changes will be effective upon posting on the Website. Your continued use of the Website constitutes your acceptance of the updated Terms.</p>
      
      <h2 className="subheading">9. Governing Law</h2>
      <p className="paragraph">These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
      
      <h2 className="subheading">10. Contact Information</h2>
      <p className="paragraph">If you have questions about these Terms, please contact us at:</p>
      <p className="contact-info">[Your Company Name]<br />
         [Your Email Address]<br />
         [Your Phone Number]<br />
         [Your Mailing Address]</p>
    </div>
  );
};

export default TermsAndConditions;
