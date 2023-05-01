import React from 'react'
 import HeaderForHome from './Headerforhome' 
import Navbar1 from '../components/page/navbar'
 import FooterForHome from './Footerhome'
import HomeBody from './Homebody'
function Home() {
  return (
    <div>
       <Navbar1 />
       <HeaderForHome/> 
       <HomeBody/>
        <FooterForHome/>


    </div>
  )
}
export default Home;