import React from 'react'
import "./Main_part2.css";
import M1 from "/assets/Picture.jpg";
import M2 from "/assets/Picture1.jpg";
import M3 from "/assets/Picture2.jpg";
import M4 from "/assets/Picture3.jpg";

const Main_part2 = () => {
  return (
    <div className='new_main'>
    <div className='new_inner'>
        <div className='image_container'><img src={M1} alt="Civil Engineering" /></div>
        <div className='mainService_slide'>
           <h2><b>Civil Engineer Services</b></h2>
           <p>"Providing safe, effective, and sustainable urban and industrial development requires the planning, building, and upkeep of infrastructure such as roads, bridges, and buildings. This is the scope of civil engineering services.""
            </p>
        </div>
        <div className='mainService_slide'>
           <h2><b>Solar Energy Services</b></h2>
           <p>"The design, installation, and upkeep of solar energy systems are all included in solar engineering services, which minimize environmental impact while enabling effective and sustainable power generation for residences, companies, and industries."</p>
              </div>
        <div className='image_container'><img src={M2} alt="Solar Energy" /></div>
        <div className='image_container'><img src={M3} alt="Electrical Engineering" /></div>
        <div className='mainService_slide'>
           <h2><b>Electrical Engineer Services</b></h2>
           <p>"Power production, distribution, and control systems are among the electrical systems for which electrical engineering services are designed, installed, and maintained. Electricity for commercial, industrial, and domestic uses is guaranteed to run safely and effectively with these services."</p>
            </div>
        <div className='mainService_slide'>
           <h2><b>IT Engineer Services</b></h2>
           <p>"IT engineering services concentrate on developing, putting into practice, and overseeing technological solutions, such as network infrastructure, software development, and system integration. For enterprises and organizations, these services maximize efficiency, security, and performance."</p>
            </div>
        <div className='image_container'><img src={M4} alt="IT Engineering" /></div>
    </div>
</div>
  )
}

export default Main_part2