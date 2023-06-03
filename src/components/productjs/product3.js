import React from 'react'
import Navbar1 from '../page/navbar'
import Headers from '../page/header'
import Footer from '../../Pages/Footerhome'
import ThirdProduct from '../../productdetails/thirddetail'
import { NavLink } from 'react-router-dom'
function Product1() {
  return (
    <div>
      <NavLink to="store3"> </NavLink>
      <Navbar1/>
      <Headers/>
    <ThirdProduct/>
      <Footer/>
    </div>
  )
}

export default Product1