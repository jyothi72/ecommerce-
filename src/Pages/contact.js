import React from 'react'
import Navbar1 from '../components/page/navbar'
import Headers from '../components/page/header'
import ContactForm from './contactform'
import Footer from '../components/page/footer'

function ContactUs() {

  function postdata (data){
    fetch('https://contact-a0795-default-rtdb.firebaseio.com//data.json',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })
  }
  return (
    <div>
       <Navbar1/>
       <Headers/>
        <ContactForm  onpostdata = {postdata}/>
       <Footer/>
    </div>
  )
}

export default ContactUs