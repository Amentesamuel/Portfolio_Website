import React from 'react'

import Navbar from './Navbar'
import Body from '../components/Hero'

const Mainpage=({children}:any)=> {
  return (
    
    <div>
    <Navbar/>
    
   {children}
    
    
    </div>

  
  )
}

export default Mainpage
