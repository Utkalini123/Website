import React from 'react';
import proo1 from "../../../public/assets/facebook.img.jpeg";
import proo2 from "../../../public/assets/twitter.img.jpeg";
import proo3 from "../../../public/assets/linkedin.img.jpeg";
import proo4 from "../../../public/assets/instagram.img.jpeg";
import proo5 from "../../../public/assets/Location.img.jpeg";
import proo6 from "../../../public/assets/JobType.img.jpeg";
import proo7 from "../../../public/assets/DatePosted.img.jpeg";
import proo8 from "../../../public/assets/Experience.img.jpeg";
import proo9 from "../../../public/assets/WorkingHours.img.jpeg";
import proo10 from "../../../public/assets/WorkingDays.img.jpeg";
import proo11 from "../../../public/assets/Vacancy.img.jpeg";
import './Product1.css'; // Make sure the path is correct
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Product1 = () => {
  return (
    <div>
      <Navbar/>
      <div className='product-container'>
        <div className="product-content">
          <h1>Product Designer</h1>

          <h2>Who Are We Looking For</h2>
          <ul>
            <li>A creative individual with a passion for designing intuitive user experiences.</li>
            <li>Someone who can translate business needs into innovative product designs.</li>
            <li>A team player who can work closely with developers and stakeholders.</li>
            <li>A problem-solver who can tackle design challenges with a user-centered approach.</li>
            <li>Ability to take feedback and iterate quickly to improve the design.</li>
            <li>Experience with design tools like Figma, Sketch, or Adobe XD.</li>
            <li>Good understanding of responsive design principles.</li>
            <li>Strong communication skills to articulate design decisions.</li>
            <li>Attention to detail and a strong eye for aesthetics.</li>
          </ul>

          <h2>What You Will Be Doing</h2>
          <ul>
            <li>Collaborating with product managers and engineers to define and implement innovative solutions for product direction, visuals, and experience.</li>
            <li>Executing all visual design stages from concept to final hand-off to engineering.</li>
            <li>Conceptualizing original ideas that bring simplicity and user-friendliness to complex design roadblocks.</li>
            <li>Creating wireframes, storyboards, user flows, process flows, and site maps to communicate interaction and design ideas.</li>
            <li>Presenting and defending designs and key milestone deliverables to peers and executive-level stakeholders.</li>
            <li>Conducting user research and evaluating user feedback to inform design decisions.</li>
            <li>Establishing and promoting design guidelines, best practices, and standards.</li>
            <li>Collaborating with marketing teams to create visually compelling content for campaigns.</li>
            <li>Staying up-to-date with the latest design trends, tools, and technologies.</li>
          </ul>

          <h2>Bonus Points for Familiarity with</h2>
          <ul>
            <li>Experience with motion design and prototyping tools like Principle, After Effects, or Framer.</li>
            <li>Knowledge of front-end development (HTML, CSS, JavaScript) to better collaborate with developers.</li>
            <li>Understanding of accessibility standards and how to design for inclusivity.</li>
            <li>Experience working in an Agile environment with cross-functional teams.</li>
            <li>Familiarity with A/B testing and data-driven design.</li>
          </ul>

          <h2>Educational Requirement</h2>
          <p>
            A degree in Design, Computer Science, or a related field is preferred, but not required. What matters most is your portfolio and ability to demonstrate a strong design process and creative problem-solving skills.
          </p>

          <h2>Salary</h2>
          <ul>
            <li>Salary: $50,000 to $75,000 per year</li>
            <li>Salary Review: Yearly, based on performance</li>
          </ul>

          <h2>Working Hours</h2>
          <ul>
            <li>8 AM - 5 PM</li>
          </ul>

          <h2>Working Days</h2>
          <ul>
            <li>Monday to Friday</li>
            <li>Weekend: Saturday, Sunday</li>
          </ul>

          <h2>Perks & Benefits You'll Get</h2>
          <ul>
            <li>Health insurance, including dental and vision coverage.</li>
            <li>401(k) matching and retirement planning options.</li>
            <li>Paid time off, including holidays and sick days.</li>
            <li>Professional development opportunities and learning stipends.</li>
            <li>Flexible working hours and remote work options.</li>
            <li>Access to a modern office space with amenities.</li>
            <li>Team outings, company events, and regular social activities.</li>
            <li>Supportive work environment that values diversity and inclusion.</li>
            <li>Opportunities for growth and advancement within the company.</li>
          </ul>

          <hr />

          <h2>Application Process</h2>
          <ul>
            <li>Submit your resume and portfolio through our online application system.</li>
            <li>Initial phone screening with our HR team.</li>
            <li>Design challenge or take-home assignment to assess your skills.</li>
            <li>On-site or virtual interview with the design team.</li>
            <li>Final interview with the leadership team.</li>
            <li>Offer and onboarding process to welcome you to the team.</li>
            <li>Continuous feedback and support throughout your journey with us.</li>
            <li>Opportunities to showcase your work and contribute to the company's growth.</li>
            <li>Be part of a dynamic team that values innovation and creativity.</li>
          </ul>

          <h2>Our Statement</h2>
          <p>
            At [Company Name], we believe in creating products that make a difference. Our mission is to deliver innovative solutions that enhance the lives of our users and drive meaningful impact. Join us in our journey to shape the future of design and technology.
          </p>

          <button className="product-apply-button">Apply Now</button>
        </div>

        <div className="product-sidebar" style={{ backgroundColor: 'whitesmoke' }}>
          <button className="product-apply-button">Apply Now</button>
          <div className="product-job-summary">
            <h3>Job Summary</h3>
            <div className="product-job-summary-item">
              <img src={proo5} alt="Location" />
              <span>Breeze Center, Banani</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo6} alt="JobType" />
              <span>Full Time</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo7} alt="DatePosted" />
              <span>Posted 1 month ago</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo8} alt="Experience" />
              <span>1-3 years</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo9} alt="WorkingHours" />
              <span>9 AM - 6 PM</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo10} alt="WorkingDays" />
              <span>Weekly 5 days, Weekend: Saturday, Sunday</span>
              <br />
              <br />
            </div>
            <div className="product-job-summary-item">
              <img src={proo11} alt="Vacancy" />
              <span>No. of Vacancies: 3</span>
              <br />
              <br />
            </div>
          </div>

          <Link to="/Joinus" className="product-view-all-jobs">View all jobs</Link>
          <div className="product-social-share" style={{ backgroundColor: 'white' }}>
            <h4 style={{ textAlign: 'center' }}>Share this:</h4>
            <a href="#"><img src={proo1} alt="Facebook" /></a>
            <a href="#"><img src={proo2} alt="Twitter" /></a>
            <a href="#"><img src={proo3} alt="LinkedIn" /></a>
            <a href="#"><img src={proo4} alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Product1;
