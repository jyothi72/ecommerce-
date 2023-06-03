import React from 'react'
import Navbar1 from '../page/navbar'
import Headers from '../page/header'
import Footer from '../../Pages/Footerhome'
import { NavLink } from 'react-router-dom'

import FourthProduct from '../../productdetails/fourthdetail'
function Product1() {
  return (
    <div>
      <NavLink to="store4"> </NavLink>
      <Navbar1/>
      <Headers/>
<FourthProduct/>
      <Footer/>
    </div>
  )
}

export default Product1