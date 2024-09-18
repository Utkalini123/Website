import React from 'react';
import './Joinus.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router-dom';

const Joinus = () => {
  const navigate = useNavigate();

  // Job listings data
  const jobListings = [
    {
      id: 1,
      title: 'Wordpress Developer',
      experience: '2 Years',
      deadline: '2021-05-08'
    },
    {
      id: 2,
      title: 'Javascript Developer',
      experience: '2 Years',
      deadline: '2021-05-08'
    },
    {
      id: 3,
      title: 'Apps Developer',
      experience: '2 Years',
      deadline: '2021-05-08'
    },
    {
      id: 4,
      title: 'IOS Developer',
      experience: '2 Years',
      deadline: '2021-05-08'
    },
    {
      id: 5,
      title: 'Node Js Developer',
      experience: '2 Years',
      deadline: '2021-05-08'
    }
  ];

  // Function to handle job card click
  const handleJobClick = (job) => {
    navigate('/Product1', { state: { job } });
  };

  return (
    <div className='Join_Us'>
      <Navbar />

      <div className="join-us">
        <div className="joinus_content">
          <h2>JOIN US</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            "Join our vibrant team and help us develop ground-breaking, impactful solutions. Join us in pursuing our goal of excellence, passion, and originality as we lead the industry. We can do amazing things when we work together."
          </p>
          <div className="buttons">
            <button className="join-team">Join the team</button>
            <button className="culture">Culture</button>
          </div>
        </div>
      </div>

      <div className="benefits">
        <div className='benefit_content'>
          <div className="benefit_content_inside">
            <h3>BENEFITS</h3>
            <h1>Why you Should Join Our Awesome Team</h1>
            <p>
              "Joining our team entails joining a forward-thinking, encouraging environment where our top goals are your success and growth. Take advantage of a collaborative work atmosphere, ongoing learning opportunities, and the ability to truly impact a cutting-edge sector. Together, we're reshaping the future, not just constructing a business."
            </p>
          </div>
        </div>

        <div className="benefit-cards">
          <div className='benefit_card'>
            <div className="joinus_card">
              <img src="./assets/Team.png" alt="Team work" style={{ backgroundColor: '#f2f2f2' }} /><br /><br />
              <b>Team work</b><br /><br />
              <p>Teamwork fuels our success through collaboration and mutual respect.</p>
            </div>
            <div className="joinus_card">
              <img src="./assets/Secure.png" alt="Secured Future" style={{ backgroundColor: '#C6F5A0' }} /><br /><br />
              <b>Secured Future</b><br /><br />
              <p>Join us for a secured future with stability and growth opportunities.</p>
            </div>
            <div className="joinus_card">
              <img src="./assets/Learning.png" alt="Learning Opportunity" style={{ backgroundColor: '#D3D3D3', height: '50px' }} /><br /><br />
              <b>Learning Opportunity</b><br /><br />
              <p>Access valuable growth-focused learning opportunities.</p>
            </div>
            <div className="joinus_card">
              <img src="./assets/Upgrade.png" alt="Upgrade Skills" style={{ margin: '3px', backgroundColor: '#F8D3E3' }} /><br /><br />
              <b>Upgrade Skills</b><br /><br />
              <p>Enhance your skills with continuous learning opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="career-openings">
        <div className="Career_content">
          <div className="sidebar" style={{ listStyle: 'none' }}>
            <ul>
              <li>HT & ADMIN</li>
              <li className="active_join">ENGINEERING <span>(20)</span></li>
              <li>SUPPORT</li>
              <li>DESIGN</li>
              <li>DIGITAL MARKETING</li>
            </ul>
          </div>
        </div>

        <div className="main-content">
          <div className='main1'>
            <h3>COME JOIN US</h3>
            <h1>Career Openings</h1>
            <p>We're always looking for creative, talented self-starters to join the NEPL family. Check out our open roles below and fill out an application.</p>
          </div>
          <div className="job-listings">
            {jobListings.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="job-info">
                  <div className='dev'>
                    <b>{job.title}</b>
                  </div>
                  <div className='exp'>
                    <p>Experience <b>{job.experience}</b></p>
                  </div>
                  <div className='dt'>
                    <p>Deadline <b>{job.deadline}</b></p>
                  </div>
                  <div className="apply-arrow">
                    <Link to="/Product1" onClick={() => handleJobClick(job)}>&#10140;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Joinus;
