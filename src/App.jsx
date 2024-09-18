import React from 'react'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Compoments/Navbar'
import Footer from './Compoments/Footer'
import Middle from './Compoments/Middle'
import Data from './Compoments/Data'
import Middlepart from './Compoments/Middlepart/Middlepart'
import Videopart from './Compoments/Videopart/Videopart'
import Clientpart from './Compoments/Clientpart/Clientpart'
import Ourprojects from './Compoments/Ourprojects/Ourprojects'
import Mappart from './Compoments/Mappart/Mappart'
import Home from './Compoments/Home/Home'
import Aboutus from './Compoments/AboutUs/Aboutus'
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import Contact from './Compoments/Contacts/Contact'
import Service from './Compoments/Services/Service'

import Servicetwo from './Compoments/Service2/Servicetwo'
import Service3 from './Compoments/Service3/Service3'
import Service4 from './Compoments/Service4/Service4'
import Gallery from './Compoments/Gallery/Gallery'
import Joinus from './Compoments/Join_us/Joinus'
import Single_project from './Compoments/Single_project/Single_project'
import Project from './Compoments/Single_project/Project'
import Main_service from './Compoments/Main_Service/Main_service'
import Product1 from './Compoments/product_designer/Product1'
import ScrollToTop from './Compoments/ScrollToTop'

const App = () => {
  return (
    <Router>
    <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Main_Service" element={<Main_service />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Servicetwo" element={<Servicetwo />} />
        <Route path="/Servicethree" element={<Service3 />} />
        <Route path="/Servicefour" element={<Service4 />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Joinus" element={<Joinus />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Product1" element={<Product1 />} />

        

        
        
       


        {/* Add other routes here */}
      </Routes>
     
    </Router>
  )
}

export default App



