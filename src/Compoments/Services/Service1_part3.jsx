import React from 'react'
import "./Service1_part3.css"
import Contact from '../Contacts/Contact'
import { Link } from 'react-router-dom'

const Service1_part3 = () => {
  return (
    <div className="wrapper_Service3">
            
            <div className="content_Service3">
                <b style={{fontWeight:'600',fontSize:'30px'}}>Petrolieum & Gas Refinery</b>
                <p style={{fontSize:'15px'}}>Petroleum & gas refineries exercise a very secondary function in the energy sector by processing crude oil and natural gas into precious and usable products. Petroleum refineries produce crude oil using a mixture of methods, including distillation, cracking, reforming, and treating, resulting in fuels and petrochemicals that are diverse such as gasoline, diesel, jet fuel, and heating oil. These products do comprise of transportation, heating, and industrial applications. On the other hand, gas refineries are focused on the processing of natural gas, and the methods involved employ methods like separation, sweetening, fractionation, and dehydration to produce and clean the components of the natural gas such as methane, ethane, propane, and butanes. The processed natural gas and its by-products are of paramount importance to energy generation, petrochemical production, and other industrial purposes. In common, both types of refineries are required to comply with strict environmental
                .</p><br /><br />
                
                
                {/* <a href="" className="btn">Join Us Today</a> */}
            </div>
            <div className="image_Service3">
            <h2><b>Get a appointment with our Expert</b></h2>
            <p>Set up a meeting with our knowledgeable experts to discuss your unique requirements and difficulties. To make sure you accomplish your project goals quickly and successfully, our specialists offer tailored advice and workable solutions. Schedule your consultation right now to take advantage of success-oriented guidance and creative tactics.
           
           </p>
             <button><Link to="/Contact"><i className='bx bx-right-arrow-alt'></i></Link></button>
            
            </div>
 </div>
  )
}

export default Service1_part3