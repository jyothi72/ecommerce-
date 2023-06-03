import React from 'react'
import Navbar1 from '../page/navbar'
import Headers from '../page/header'
import Footer from '../../Pages/Footerhome'

import SecondDetails from '../../productdetails/seconddetail'
import { NavLink } from 'react-router-dom'
function Product1() {
  return (
    <div>
      <NavLink to="/store1"></NavLink>
      <Navbar1/>
      <Headers/>
<SecondDetails/>
      <Footer/>
      
    </div>
  )
}

export default Product1