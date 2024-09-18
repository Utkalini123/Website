import React, { useRef ,useState} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gqr357a', 'template_bzsohrw', form.current, {
        publicKey: 'cOiTMagzVAX_Js2gz',
      })
      .then(
        () => {
        form.current.reset();
          // Set the success message
          alert('Your message has been sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        },
      );
  };

  return (
    <div className="container1">
      <Navbar />
      <div className="heading">
        <h1>Contact Us</h1>
        <span style={{ color: 'hsl(195, 19%, 92%)' }}>Home / Contact Us</span>
      </div>

      <div className="lastpart">
        <div className="one">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="from_phone"
              placeholder="Phone Number"
              required
            />
            <input
              type="text"
              name="from_address"
              placeholder="Address"
              required
            />
            <input type="textarea"
              name="from_message"
              placeholder="Message"
              required
            />
            <button type="submit" value="Send">Submit</button>
          </form>
        </div>
      </div>

      <div className="mapp">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d29934.34634488538!2d85.76568072156498!3d20.30882139462415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a1909d8aae4fec7%3A0xbf6ffb34d3a1a811!2sNilachala%20Energy%20Private%20Limited%2C%20Plot-%201528%2F59%2C%20Shyamnagar%2C%20Lane-5%20C%2C%20near%20SD%20Convention%2C%20GA%20Colony%2C%20Bharatpur%2C%20Bhubaneswar%2C%20Odisha%20751003!3m2!1d20.3099825!2d85.7738629!5e0!3m2!1sen!2sin!4v1724832939801!5m2!1sen!2sin"
          width="750"
          height="300"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="geolocation; fullscreen"
        ></iframe>
      </div>

      <div className="about">
        <div className="bottom">
          <div className="b1"><i className='bx bx-message-rounded-dots'></i></div>
          <div className="b2">
            <p style={{ fontSize: '15px' }}> <b>E-mail</b> </p>
            <p style={{fontSize:'0.8rem'}}>
            Admin@neplbbsr.com <br />
            neplbbsr@gmail.com
            </p>
            
          </div>
        </div>

        <div className="bottom1">
          <div className="b1"><i className='bx bx-phone-call'></i></div>
          <div className="b2">
            <p style={{ fontSize: '15px' }}> <b>Company contacts</b></p>
            <p style={{fontSize:'0.8rem'}}>
            +91 9438344709 <br />
            +91 7008357686
            </p>
          </div>
        </div>

        <div className="bottom2">
          <div className="b1"></div>
          <div className="b2" style={{marginTop:'20px'}}>
            <b style={{fontSize:'20px'}}>Company Address</b>
            <h1 style={{fontSize:'18px'}}><b style={{fontSize:'20px'}}>Office :-</b> PlotNo-1528/59, Shyam Nagar, Bharatpur, BBSR, Pin-751003</h1>
          </div>
        </div>
      </div>

      <Footer className="footer" />
    </div>
  );
}

export default Contact;
