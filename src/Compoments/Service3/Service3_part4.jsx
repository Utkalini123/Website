import React from 'react';
import "./Service3_part4.css";
import { Link } from 'react-router-dom';

const Service3_part4 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <b className='center-mobile' style={{ marginLeft: '210px', fontWeight: '700', fontSize: '30px' }}>Other Services</b>
      <div className='last_ServiceFor'>
        <div className='bottom_ServiceFor'>
          <div className='b_serviceFor'></div>
          <div className='con_ServiceFor'>
            <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
            <h3 style={{ fontWeight: '700', fontSize: '19px' }}>Electrical Engineer services</h3>
            <br /><br />
            <Link to="/Servicethree" className='last_BtnServiceFor' style={{ color: 'black', fontSize: '17px' }} onClick={scrollToTop}>
              Read <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>

        <div className='bottom_ServiceFor'>
          <div className='b_serviceFor'></div>
          <div className='con_ServiceFor'>
            <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
            <h3 style={{ fontWeight: '700' }}>Civil engineer services</h3>
            <br /><br />
            <Link to="/Service" className='last_BtnServiceFor' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
              Read <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>

        <div className='bottom_ServiceFor'>
          <div className='b_serviceFor'></div>
          <div className='con_ServiceFor'>
            <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
            <h3 style={{ fontWeight: '700' }}>Solar energy services</h3>
            <br /><br />
            <Link to="/Servicetwo" className='last_BtnServiceFor' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
              Read <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>

        <div className='bottom_ServiceFor'>
          <div className='b_serviceFor'></div>
          <div className='con_ServiceFor'>
            <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
            <h3 style={{ fontWeight: '700' }}>IT Engineer services</h3>
            <br /><br />
            <Link to="/Servicefour" className='last_BtnServiceFor' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
              Read <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service3_part4;
