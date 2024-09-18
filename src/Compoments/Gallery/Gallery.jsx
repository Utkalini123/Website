import React from 'react'
import "./Gallery.css"
import Navbar from '../Navbar'
import Footer from '../Footer'

const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div className='gallery_section'>
        
    <div className="gallery-header">
      <img src="./assets/Gallery_rectangle1.png" alt="Do Something" className="gallery-header-bg" />
      <div className="gallery-header-content">
        <h1>Portfolio or Gallery</h1>
        <p style={{marginLeft:'200px'}}>Home / Portfolio Archive</p>
        <div className="gallery-contact-box">
          <p>CALL US TODAY</p>
          <p><strong>+91 9438344709</strong></p>
        </div>
      </div>
    </div>

    <div className="gallery-portfolio">
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle15.png" alt="1st Photo" />
        <div className="gallery-portfolio-info"></div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle16.png" alt="JCB Image" />
        <div className="gallery-portfolio-info">
          <h2>Orrisa Project 2</h2>
          <p>Sub info like date of completion</p>
        </div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle17.png" alt="People" />
        <div className="gallery-portfolio-info"></div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle18.png" alt="Transmission Line" />
        <div className="gallery-portfolio-info">
          <h2>Orrisa Project 1</h2>
          <p>Sub info like date of completion</p>
        </div>
      </div>
      <div className="gallery-portfolio-item gallery-special">
        <img src="./assets/Gallery_rectangle19.png" alt="Blue Image" />
        <div className="gallery-portfolio-info gallery-special-info">
          <h2>Commercial</h2>
          <p>Benoit Architecture</p>
          <p>+</p>
        </div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle20.png" alt="Plane" />
        <div className="gallery-portfolio-info">
          <h2>Orrisa Project 3</h2>
          <p>Sub info like date of completion</p>
        </div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle21.png" alt="Building" />
        <div className="gallery-portfolio-info">
          <h2>Orrisa Project 4</h2>
          <p>Sub info like date of completion</p>
        </div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle22.png" alt="Panel" />
        <div className="gallery-portfolio-info"></div>
      </div>
      <div className="gallery-portfolio-item">
        <img src="./assets/Gallery_rectangle23.png" alt="People" />
        <div className="gallery-portfolio-info"></div>
      </div>
      
    </div>
   

    
    
  </div>
  <Footer className="gallery_footer"/>
  </>
  

  
  )
}

export default Gallery