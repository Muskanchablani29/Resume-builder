import React from 'react';
import './Contacttwo.css';

export default function ContactDetails() {
    return (
        <div className="ContactDetails">
            <div className="ContactDetails_header">
                <h1>Get in Touch</h1>
                <p>Feel free to contact us via any of the channels below. We're here to help!</p>
            </div>
            <div className="ContactDetails_content">
                <div className="details_item">
                    <i className="fas fa-envelope"></i>
                    <div>
                        <h3>Email</h3>
                        <p>support@resumebuilder.com</p>
                    </div>
                </div>
                <div className="details_item">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                        <h3>Phone</h3>
                        <p>+1 (123) 456-7890</p>
                    </div>
                </div>
                <div className="details_item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                        <h3>Address</h3>
                        <p>123 Resume Lane, Career City, USA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
