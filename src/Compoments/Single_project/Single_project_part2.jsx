import React, { useState } from 'react';
import "./Single_project_part2.css";
import image1 from "/assets/project_img1.jpg";
import image2 from "/assets/project_ing2.jpg";
import image3 from "/assets/projectback.jpg";
import image4 from "/assets/project_img3.jpg";
import image5 from "/assets/project_img4.jpg";
import nayagarh from "/assets/nayagarh.jpeg";
import proj1 from "/assets/proj1.jpeg"
import proj2 from "/assets/proj2.jpeg"
import proj3 from "/assets/proj3.jpeg"
import proj4 from "/assets/proj4.jpeg"
import proj5 from "/assets/proj5.jpeg"
import proj6 from "/assets/proj6.jpeg"
import proj7 from "/assets/proj7.jpeg"
import proj8 from "/assets/proj8.jpeg"
import proj9 from "/assets/proj9.jpeg"

const Single_project_part2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='part2_main'>

  
    <div className='scrollable-container'>
      <div className='project_part2'>
        <div className='part2_1'>
          <div className='part2_1_images'>
            <img src={nayagarh} alt="" style={{height:'20rem'}}/>
          </div>
          <div className='part2_1_images'>
            <div className={`text-wrapper ${isExpanded ? 'expanded' : ''}`}>
              <p>The Nayagarh LTABT project was a pivotal initiative undertaken by Nilachala Energy Pvt Ltd to enhance the electrical infrastructure in Nayagarh district. The project involved the installation of Low Tension Aerial Bunched Cables (LTABT) across various rural and semi-urban areas.</p>
            </div>
            <a href="#" className="read-more" onClick={handleToggle}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </a>
          </div>

          <div className='part2_1_image'>
            <div><img src={proj1} alt="" /></div>
            <div><img src={proj2} alt="" /></div>
            <div><img src={proj3} alt="" /></div>
            <div><img src={proj4} alt="" /></div>
          </div>

          {/* <div className='previous'>
            <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOhJREFUSEu1ltENwjAMRK+bMApsApMAkwCTwChsAjwpliyXtKqT5KOVqure+ewmnTR4TYP11QOwk3QrRg/RcCvgIunsRGd6WYC53gfHXQDe9VvSSdKzgJoA0fW9iKP9aQUQhbk01y8XTxqAa5p4LGKIziYlW4F3jf71dyH/f2tzBbGRuCaa2toEIGsbvyXXHpYC4PixEEsaQGNpqn2hgLpGZM4AERf3tWo2ReRLj9Uwpny5seFpgMEsslo1zQBAsRo/YV0AVs2wzS72hkNmyHbtp8yPM8+btuvaNjH0yFz9Z8gemavC9sIXD1E3GYJCu/8AAAAASUVORK5CYII="/>Previous</div>
            <div>Next<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOtJREFUSEu1ltENwjAMRK+bwCawCUwCTAJMAqOwCfRJMUJtU8cJyRcI6uc7X6wO6nyGzvWVA1wl7STtJb1amsgB3qkoxe/j53MtxANYXUBVajzAVtJD0iZZFVbjAfid4gdJpyTnKelYOpsSgNlkkJCaCADQVM3FC0AUYGpIlVlGALAM62anFmBq7L7wfVFNC2DJMtSQvO9pBVDo1y5s4r78BcDAu1nUbcjTrm8pQdlVFZkB25W1wVmNZnQGdE3mucmc2SCz7Y/Z9RSQCOs6m/UWgD3bbV1XdV0yA8t3dses2VICKH3e/V/3t4oPhaE/Gb7vnvwAAAAASUVORK5CYII="/></div>
          </div> */}
        </div>

        <div className='part2_2'>
          <h2>NAYAGARH LTABC</h2>
          <div className='part2_para'>
            <p> The successful completion of the Nayagarh LTABT project resulted in a significant reduction in technical losses and power theft, enhancing the overall efficiency and reliability of the power distribution system in the region. The project was completed on schedule, demonstrating Nilachala Energy Pvt Ltd's commitment to quality and excellence in project execution.</p>
              </div>

          <h2>Project Info</h2>

          <div className='project_info'>
            <b>Client :</b>
            <p>PPCODL</p>
          </div>
          <div className='project_info'>
            <b>Category :</b>
            <p>Electrical business</p>
          </div>
          <div className='project_info'>
            <b>Completed on :</b>
            <p>30 January 2022</p>
          </div>
          <div className='social_icons'>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className='project_part2'>
        <div className='part2_1'>
          <div className='part2_1_images'>
            <img src={proj5} alt="" style={{height:'20rem'}} />
          </div>
          <div className='part2_1_images'>
            <div className={`text-wrapper ${isExpanded ? 'expanded' : ''}`}>
              <p>
              The project involved the installation of an 11kV interposing transformer designed to step down voltage from 11kV to a more suitable level for various equipment and systems. This was crucial for maintaining operational efficiency and safety within the facility, where different components required different voltage levels for optimal performance.     </p>
            </div>
            <a href="#" className="read-more" onClick={handleToggle}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </a>
          </div>

          <div className='part2_1_image'>
            <div><img src={proj6} alt="" /></div>
            <div><img src={proj7} alt="" /></div>
            <div><img src={proj8} alt="" /></div>
            <div><img src={proj9} alt="" /></div>
          </div>

          {/* <div className='previous'>
            <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOhJREFUSEu1ltENwjAMRK+bMApsApMAkwCTwChsAjwpliyXtKqT5KOVqure+ewmnTR4TYP11QOwk3QrRg/RcCvgIunsRGd6WYC53gfHXQDe9VvSSdKzgJoA0fW9iKP9aQUQhbk01y8XTxqAa5p4LGKIziYlW4F3jf71dyH/f2tzBbGRuCaa2toEIGsbvyXXHpYC4PixEEsaQGNpqn2hgLpGZM4AERf3tWo2ReRLj9Uwpny5seFpgMEsslo1zQBAsRo/YV0AVs2wzS72hkNmyHbtp8yPM8+btuvaNjH0yFz9Z8gemavC9sIXD1E3GYJCu/8AAAAASUVORK5CYII="/>Previous</div>
            <div>Next<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOtJREFUSEu1ltENwjAMRK+bwCawCUwCTAJMAqOwCfRJMUJtU8cJyRcI6uc7X6wO6nyGzvWVA1wl7STtJb1amsgB3qkoxe/j53MtxANYXUBVajzAVtJD0iZZFVbjAfid4gdJpyTnKelYOpsSgNlkkJCaCADQVM3FC0AUYGpIlVlGALAM62anFmBq7L7wfVFNC2DJMtSQvO9pBVDo1y5s4r78BcDAu1nUbcjTrm8pQdlVFZkB25W1wVmNZnQGdE3mucmc2SCz7Y/Z9RSQCOs6m/UWgD3bbV1XdV0yA8t3dses2VICKH3e/V/3t4oPhaE/Gb7vnvwAAAAASUVORK5CYII="/></div>
          </div> */}
        </div>

        <div className='part2_2'>
          <h2>11 KV Inter posing</h2>
          <div className='part2_para'>
            <p>The 11kV Interposing Transformer Installation project successfully met its objectives, providing a critical upgrade to the electrical distribution system and contributing to the overall reliability and efficiency of operations.</p>
              </div>

          <h2>Project Info</h2>

          <div className='project_info'>
            <b>Client :</b>
            <p>PPCODL</p>
          </div>
          <div className='project_info'>
            <b>Category :</b>
            <p>Electrical business</p>
          </div>
          <div className='project_info'>
            <b>Completed on :</b>
            <p>21 March 2023</p>
          </div>
          <div className='social_icons'>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      
      

    </div>
    </div>
  );
};

export default Single_project_part2;
