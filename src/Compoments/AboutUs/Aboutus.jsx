import React, { useRef } from 'react';
import './aboutus.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Aboutus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gqr357a', 'template_49c6jge', form.current, {
      publicKey: 'cOiTMagzVAX_Js2gz',
    })
    .then(
      (result) => {
        alert('Appointment scheduled successfully!');
        console.log(result.text);
        // Clear form fields after successful submission
        e.target.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again later.');
        console.log(error.text);
      }
    );
  };

  return (
    <div className="about-container">
      <Navbar />
      
      <div className="about-heading">
        <h1>About Us</h1>
        <span>Home/About Us</span>
      </div>
      
      <div className="about-wrapper">
        <div className="about-image">
          <img src="./assets/director.jpeg" alt="Slide" />
          <div className="box blue"style={{backgroundColor:'grey',position:'absolute',top:'360px',left:'120px'}}>
          <p><span className="number">7+</span><br />Years of Experience</p>
        </div>
        </div>
        <div className="about-contact-box">
          <p>CALL US TODAY</p>
          <p><strong>+91 9438344709</strong></p>
        </div>
        <div className="about-content">
          <p style={{color:'blue'}}>ABOUT US</p>
          <h2><b>Client's thought</b></h2>
          <div className='About_client'>
            <p>"Failure is central to engineering. Every single calculation that an engineer makes is a failure calculation. Successful engineering is all about understanding how things break or fail."</p>
            <h3 style={{fontSize:'20px',fontWeight:'600'}}>Girja Sankar Rana, <span>Director</span></h3>
          </div>
          
          <Link to="/Joinus" className="about-btn">Join Us Today</Link>
        </div>
      </div>
      
      <div className="about-middle">
        <div className="about-bgimg"></div>
        <h3>Get a Quote</h3>
        <h1><b>Build Your Future Today</b></h1>
        <p style={{fontSize:'15px'}}>I am an Electrician By Profession But an Engineer by Knowledge and Intelligence...</p>
        <Link to="/Joinus" className="about-btn">Join Us Today <i className='bx bx-right-arrow-alt'></i></Link>
      </div>
      
      <div className="about-section">
        <div className="about-bottom">
          <div className="about-b1">01</div>
          <div className="about-b2"><b>Project Planning</b>
            <p>Strategic planning for seamless project execution.</p>
          </div>
        </div>
        <div className="about-bottom1">
          <div className="about-b1">02</div>
          <div className="about-b2"><b>Technical Support</b>
            <p>Expert support and solutions for all technical issues.</p>
          </div>
        </div>
        <div className="about-bottom2">
          <div className="about-b1">03</div>
          <div className="about-b2"><b>Custom Solutions</b>
            <p>Custom solutions to meet project needs and drive results.</p>
          </div>
        </div>
      </div>
      
      <div className="about-lastpart">
        <div className="about-one">
          <h2>Request a Quote</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Full Name" required />
            <input type="email" name="from_email" placeholder="E-Mail" required />
            <input type="number" name="from_phone" placeholder="Phone Number" required />
            <input 
              type="text" 
              id="service" 
              name="service" 
              list="services" 
              placeholder="Select Service" 
              className="input-dropdown" 
              required
            />
            <datalist id="services">
              <option value="Civil engineering services" />
              <option value="Solar energy services" />
              <option value="Electrical engineering services" />
              <option value="IT engineering services" />
            </datalist>
            <textarea name="from_message" placeholder="Message" required></textarea>
            <button type="submit">Appointment</button>
          </form>
        </div>
        <div className='flex-container'> 
          <div className="about-two">
            <ul>
              <li><img src="./assets/last1.jpg" alt="La3" /></li><br /><br />
              <li><img src="./assets/La1.jpg" alt="La1" /></li><br /><br />
              <li><img src="./assets/icon1.jpg" alt="La2" /></li><br /><br />
            </ul>
          </div>
          <div className="about-three">
            <div className='about-three-1'>
              <h3>Safety and Importance:</h3>
              <p>"Safety is our top priority. We ensure a secure environment to protect our team and maintain operational excellence."</p>
            </div>
            <div className='about-three-2'>
              <h3>Advanced Equipment Services:</h3>
              <p>"Delivering accurate and efficient solutions with advanced machinery, designed to meet the highest standards in every project."</p>
            </div>
            <div className='about-three-3'>
              <h3>Precision Equipment:</h3>
              <p>"Our precision tools ensure top-quality work, enhancing safety and consistency across all projects for superior outcomes."</p>
            </div>
          </div> 
        </div>
      </div>
      
      <Footer className="about_footer"/>
    </div>
  );
};

export default Aboutus;
