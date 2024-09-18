import React from 'react';
import './Mappart.css';

const Mappart = () => {
  return (
    <>
    <div className="map-container">
      <img src="./assets/map.png "alt="Map" className="map-image" />
      <div className="icon">
        <img src="./assets/map-icon.png" alt="" /> 
      </div>
      <div className='Address1'>
      <span>Company Address</span>
      <p className='h2name' ><b style={{fontSize:'25px'}}>Office :-</b> PlotNo-1528/59, Shyam Nagar, Bharatpur, BBSR, Pin-751003</p>
      </div>
      <div className='numbers'>
        <div className='num'>
          <img src="./assets/call.png" alt=""  className='call_img'/>

        </div>
        <div className='contacts'>
          <span>company contacts </span>
          <h6>+91 7008357686  <b style={{fontSize:'20px', fontWeight:'600'}}>/</b><br />
          +91 9438344709
          </h6>
        

        </div>
    


      </div>
      <div className='emails'>
        <div className='email'>
          <img src="./assets/chat_img.png" alt=""  className='email_img'/>

        </div>
        <div className='mails'>
          <span>company Email</span>
          <h6>Admin@neplbbsr.com <b style={{fontSize:'20px', fontWeight:'600'}}>/</b> <br />
          neplbbsr@gmail.com
          </h6>
          

        </div>
    


      </div>
      </div>
      </>
  );
}

export default Mappart;
