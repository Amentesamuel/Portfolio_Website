'use client'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowDown } from 'react-icons/ai'

import Lottie from 'lottie-react'
import animationData from '../lotties/animation.json'
import { motion,useScroll,useTransform } from 'framer-motion'
import { useRef } from 'react'


const Hero=()=> {
  const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target:targetRef,
      offset: ["end end", "end start"]
  
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, -2]);
  return (
   <>
   <div 
  
   className='w-full'>
   <section className="flex items-center justify-center h-screen w-full pb-20 md:pt-20" id="home">
      <div className="  md:gap-y-20 max-w-screen-lg lg:px-8  md:mx-auto  ">
        <div className="grid md:grid-cols-2  items-center pt-14  ">
        
        
          <div className="flex flex-col gap-4 md:order-1 order-2 md:pl-0 pl-10 md:pt-0 pt-10">
            <h1 className="font-bold ">Hi,I'M AMENTE</h1>
            <h2 className=" font-medium ">Software Engineer</h2>
           
           <div className="font-md  ">
              <h3 className='flex'>Experiance on Web design and Development spacialized in MERN stack. Feel free to See Some previous Projects And if you have
              new project</h3>
           
            </div>
            
           
            <Link href={'#contact'} className="">
              <button className="bg-blue-500 hover:scale-105 ease-in duration-200 hover:bg-blue-700 text-white font-bold p-4 px-10 rounded-lg inline-flex items-center">
              Let's Talk

              </button>
             
              
            </Link>
          </div>
          <div className="md:order-2 order-1 md:pl-0 pl-10 ">
           <Lottie animationData={animationData} height={500} width={500} 
           
           />

          </div>
        </div>
       
      </div>
    </section>
  


    {/* <div className='flex items-center justify-between h-screen max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex itmes-center justify-between gap-32 '>
      <div className=" flex-col gap-2 md:visible ">
           
           <Link href={'/'} target='_blank' className=" fill-blue-400 bg-blue-500 "><AiFillLinkedin  size={30}/></Link>
           <Link href={'/'} target='_blank' className="home__social-icon "><AiFillInstagram size={30}/></Link>
           
           <Link href={'/'} target='_blank' className="home__social-icon "><AiFillGithub size={30}/></Link>
         </div>
        
      

      <div>
      <div className="flex">
          <div>
          <h1 className="text-5xl">Hi,I'M AMENTE</h1>
            <h3 className="text-2xl">Software Engineer</h3>
            <p className="flex items-center justify-center">
              Experiance on Web design and Development and Some programming
              languages. Feel free to See Some previous Projects And if you have
              new project Contact me.
            </p>
          </div>
            <div className="home__img md:order-2 order-1">
           <Lottie animationData={animationData} height={800} width={800} 
           
           />

          </div>
           </div>

         
      </div>
      </div>
     
  

   

  </div> */}
  </div>
   </>
  )
}

export default Hero
