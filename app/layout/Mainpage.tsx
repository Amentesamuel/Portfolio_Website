import React from 'react'
import Footer from '../components/Footer'
import Navbar from './Navbar'
import Body from '../components/Hero'

const Mainpage=({children}:any)=> {
  return (
    
    <div>
    <Navbar/>
    
   {children}
    
    <Footer/>
    </div>

  
  )
}

export default Mainpage
