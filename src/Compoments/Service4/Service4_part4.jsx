import React from 'react';
import "./Service4_part4.css";
import { Link } from 'react-router-dom';

const Service4_part4 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <b className='center-mobile' style={{ marginLeft: '230px', fontWeight: '700', fontSize: '30px' }}>Other Services</b>
      <div className='last_ServiceLast'>
        <div className='bottom_ServiceLast'>
          <div className='b_serviceLast'></div>
          <div className='con_ServiceLast'>
            <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
            <h3 style={{ fontWeight: '600', fontSize: '20px' }}>IT engineer services</h3>
            <br /><br />
            <Link to="/Servicefour" className='last_BtnServiceLast' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
              Read <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>

        <div className='bottom_ServiceLast'>
          <div className='b_serviceLast'></div>
          <div className='con_ServiceLast'>
            <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
            <h3 style={{ fontWeight: '600', fontSize: '20px' }}>Civil Engineer services</h3>
            <br /><br />
            <Link to="/Service" className='last_BtnServiceLast' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
              Read <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>

        <div className='bottom_ServiceLast'>
          <div className='b_serviceLast'></div>
          <div className='con_ServiceLast'>
            <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
            <h3 style={{ fontWeight: '700', fontSize: '20px' }}>Solar energy services</h3>
            <br /><br />
            <Link to="/Servicetwo" className='last_BtnServiceLast' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
              Read <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>

        <div className='bottom_ServiceLast'>
          <div className='b_serviceLast'></div>
          <div className='con_ServiceLast'>
            <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
            <h3 style={{ fontWeight: '700', fontSize: '18px' }}>Electrical Engineer services</h3>
            <br /><br />
            <Link to="/Servicethree" className='last_BtnServiceLast' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
              Read <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service4_part4;
