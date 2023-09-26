'use client'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowDown, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import Lottie from 'lottie-react'
import animationData from '../lotties/animation1.json'
import { useState } from 'react'
import { motion,useScroll,useTransform } from 'framer-motion'
import { useRef } from 'react'


const Hero=()=> {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target:targetRef,
    

  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, -2]);
  
    const [Education, ShowEducation] = useState(false);

    const handleNavbar = () => {
        ShowEducation(!Education)
    }
  
    
  
  return (
    
   <>
   <div
    //  initial={{y:"50%" ,opacity:0,scale:0.5}}

    //   animate={{y:0 ,opacity:1,scale:1}}
    //   transition={{duration:0.5,ease:'easeOut'}}
    
   className='w-full md:mt-0 ' id='about'>
    <div>
    <h2 className='flex items-center justify-center text-[#3c6fde]'>About</h2>
   
   <section className="flex items-center  w-full pb-20 " id="home">
   
    
    
      <div className="  md:gap-y-20 max-w-screen-lg lg:px-8  md:mx-auto  ">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center   ">
        <div className="home__img">
           <Lottie animationData={animationData} height={400} width={400} 
           
           />

          </div>
        
        
          <div className="flex flex-col gap-4 md:pl-0 pl-10">
            <h2 className="">FULLSTACK WEB DEVELOPER AND UI/UX DESIGNER</h2>
            
           
           <div className="">
              <h3>I am a fullstack web developer working with the MERN stack. I use the latest version of React and tailwindcss on the frontend. I write code in a test driven development approach to validate and verify requirements are met. I use Ionic framework and React material to make responsive user interfaces that can get built as hybrid mobile applications using capacitor.</h3> 
           
            </div>
            
           
            
             
              
           
          </div>
          
        </div>
        <div onClick={handleNavbar} className="  cursor-pointer">


 
    
    
  
</div>
       
      </div>
    </section>
  


    </div>
  </div>
   </>
  )
}

export default Hero