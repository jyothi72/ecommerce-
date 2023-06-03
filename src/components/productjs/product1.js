import React from 'react'
import Navbar1 from '../page/navbar'
import Headers from '../page/header'
import Footer from '../../Pages/Footerhome'
import FirstDetails from '../../productdetails/product1detail'
import { NavLink } from 'react-router-dom'
function Product1() {
  return (
    <div>
      <NavLink to="store2"> </NavLink>
      <Navbar1/>
      <Headers/>
<FirstDetails/>
      <Footer/>
     
    </div>
  
  )
}

export default Product1