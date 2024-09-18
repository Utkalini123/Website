import React from 'react';
import "./Service1_part4.css";
import { Link } from 'react-router-dom';

const Service1_part4 = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='last_main'>
            <h2 className="center-mobile1">Other Services</h2>
            <div className='last_Service4'>
                <div className='bottom_Service4'>
                    <div className='b_service4'></div>
                    <div className='con_Service4'>
                        <h4 style={{ fontSize: '18px', color: 'grey' }}>Explore services</h4>
                        <h3 style={{ fontWeight: '700' }}>Civil Engineer services</h3>
                        <br /><br />
                        <Link to="/Service" className='last_BtnService4' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
                            Read<i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>

                <div className='bottom_Service4'>
                    <div className='b_service4'></div>
                    <div className='con_Service4'>
                        <h4 style={{ fontSize: '18px', color: 'grey' }}>Explore services</h4>
                        <h3 style={{ fontWeight: '700' }}>Solar energy services</h3>
                        <br /><br />
                        <Link to="/Servicetwo" className='last_BtnService4' style={{ color: 'black', fontSize: '15px' }}>
                            Read<i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>

                <div className='bottom_Service4'>
                    <div className='b_service4'></div>
                    <div className='con_Service4'>
                        <h4 style={{ fontSize: '18px', color: 'grey' }}>Explore services</h4>
                        <h3 style={{ fontWeight: '700' }}>Electrical engineer services</h3>
                        <br /><br />
                        <Link to="/Servicethree" className='last_BtnService4' style={{ color: 'black', fontSize: '15px' }}>
                            Read<i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>

                <div className='bottom_Service4'>
                    <div className='b_service4'></div>
                    <div className='con_Service4'>
                        <h4 style={{ fontSize: '18px', color: 'grey' }}>Explore services</h4>
                        <h3 style={{ fontWeight: '700' }}>IT Engineer services</h3>
                        <br /><br />
                        <Link to="/Servicefour" className='last_BtnService4' style={{ color: 'black', fontSize: '15px' }}>
                            Read<i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service1_part4;
