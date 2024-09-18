import './Middle.css';
import { Link } from 'react-router-dom';
const Middle = () => {
  return (
    <>
      <div className="middle-part">
        <img src={"/assets/middlemenu.jpg"} alt='noimage' className='pic1'></img>
        <div className='Home_hero'>
          <h1 className="Home_header">Construction Solution
          <span className='Home_header1'> For everyone</span>
          </h1>
          
          <blockquote className='quote'>What I view life like is about energy.
            Everything is about energy - everything.
            We physically are little units of electrical energy,
            and we vibrate and project electromagnetic thought.</blockquote>
            <Link to="/contact" className="button-link">
            <button className="button">
            Learn more <img src="./assets/long-arrow-alt-right.png" alt="arrow" />
            </button>
            </Link>

            
            
          
        </div>
      </div>
      <div className="container-box">
        <div className="box green">
          <p><span className="number">470</span><br />Completed Projects</p>
        </div>
        <div className="box blue">
          <p><span className="number">7+</span><br />Years of Experience</p>
        </div>
        <div className="services"><br />
          <h5 className='text'>we construct and manage places and infrastructures </h5>
          <div className="service">
            <img src={"/assets/shape1.png"} alt="General Contract Icon" />
            <div className='sub-service'>
              <h3 className='header-details'>General Contract</h3>
              <p>"For an effective collaboration, we provide customized energy solutions with transparent terms that include audits, installations, and maintenance."</p>
            </div>
          </div>
          <div className="service">
            <img src={"/assets/Shape3.png"} alt="Project Planning Icon" />
            <div className='sub-service'>
              <h3 className='header-details' style={{marginLeft:'15px'}}>Project Planning</h3>
              <p style={{marginLeft:'15px'}}>"Thorough project planning guarantees efficient resource management, on-time delivery, and alignment with customer objectives for effective energy solutions.
              "</p>
            </div>
          </div>
          <div className="service">
            <img src={"/assets/Shape2.png"} alt="Refurbishment Icon" />
            <div className='sub-service'>
              <h3 className='header-details' style={{marginLeft:'5px'}}>Refurbishment</h3>
              <p style={{marginLeft:'5px'}}>"With little interruption to business operations, professional refurbishing services increase energy efficiency and prolong the life of your equipment.
              "</p>
            </div>
          </div>
        </div>
      </div>
   


    </>
  )
}

export default Middle
