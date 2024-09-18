import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-left">
        <img src={"/assets/neplfooter.jpg"} className='logo' alt="Company Logo" />
        <div className='number-section'>
          <h1>Contact Details:</h1>
          <h2>+91 7008357686</h2>
        </div>
        <div className='social-icons'>
          <a href="https://www.facebook.com" aria-label="Facebook"><i className="bi bi-facebook fb"></i></a>
          <a href="https://www.twitter.com" aria-label="Twitter"><i className="bi bi-twitter tw"></i></a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn"><i className="bi bi-linkedin ln"></i></a>
          <a href="https://www.youtube.com" aria-label="YouTube"><i className="bi bi-youtube yt"></i></a>
        </div>
        <p className='footer-text'>
          What I view life like is about energy. Everything is about energy - everything.
          We physically are little units of electrical energy, and we vibrate and project electromagnetic thought.
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-right-content">
          <div className="footer-right-left">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/Aboutus">About Company</Link></li>
              <li><Link to="/Main_Service">Our Services</Link></li>
              <li><Link to="/Project">Projects</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/Contact">Contacts</Link></li>
            </ul>
          </div>
          <div className="footer-right-center">
            <h2>Client Support</h2>
            <ul>
              <li>About Company</li>
              <li>Our services</li>
              <li>Projects</li>
              <li>Pricing</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className='footer-right-right'>
            <h2>Our News</h2>
            <ul>
              <li>About Company</li>
              <li>Our services</li>
              <li>Projects</li>
              <li>Pricing</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ Nepl.com - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
