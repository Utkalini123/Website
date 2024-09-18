import React from 'react';
import "./Service2_part3.css";
import { Link } from 'react-router-dom';

const Service2_part3 = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <b className="center-mobile" style={{ marginLeft: '235px', fontWeight: '700', fontSize: '30px' }}>Other Services</b>
            <br /><br />
            <div className='last_Service21'>
                <div className='bottom_Service21'>
                    <div className='b_service21'></div>
                    <div className='con_Service21'>
                        <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
                        <h3 style={{ fontWeight: '700' }}>Solar energy services</h3>
                        <br /><br />
                        <Link to="/Servicetwo" className='last_BtnService21' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
                            Read <i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>
                <div className='bottom_Service21'>
                    <div className='b_service21'></div>
                    <div className='con_Service21'>
                        <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
                        <h3 style={{ fontWeight: '700' }}>Civil Engineer services</h3>
                        <br /><br />
                        <Link to="/Service" className='last_BtnService21' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
                            Read <i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>
                <div className='bottom_Service21'>
                    <div className='b_service21'></div>
                    <div className='con_Service21'>
                        <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
                        <h3 style={{ fontWeight: '700' }}>Electrical Engineer services</h3>
                        <br /><br />
                        <Link to="/Servicethree" className='last_BtnService21' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
                            Read <i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>
                <div className='bottom_Service21'>
                    <div className='b_service21'></div>
                    <div className='con_Service21'>
                        <h4 style={{ fontSize: 18, color: 'grey' }}>Explore services</h4>
                        <h3 style={{ fontWeight: '700' }}>IT Engineer services</h3>
                        <br /><br />
                        <Link to="/Servicefour" className='last_BtnService21' style={{ color: 'black', fontSize: '15px' }} onClick={scrollToTop}>
                            Read <i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service2_part3;
