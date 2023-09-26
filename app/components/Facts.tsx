'use client'
import React from 'react'
import { motion,useScroll,useTransform } from 'framer-motion'
import { ImHappy } from 'react-icons/im'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { GrUserExpert } from 'react-icons/gr'



import { useRef } from 'react'

function Facts() {
 

  return (

    
    <>
    <div className='w-full'
      // style={{scale}}
      // ref={targetRef}
    >
    <h2 className='flex items-center justify-center text-[#3c6fde]'>Facts</h2>

    <div className='w-full flex flex-col items-center justify-between'>
    
    <section id="facts" className=" flex  mt-[30px] pt-[30px] md:pb-0 pb-36 px-[30px]">
      <div 
      //  style={{scale}}
      //  ref={targetRef}
       className='max-w-screen-lg'
       >

        
       

        <div className="grid md:grid-cols-3 md:gap-20 grid-cols-1 justify-between">

          <div className="mt-5 md:mt-0">
            <div className=" flex flex-col items-center justify-center ">
            <ImHappy size={30}/>
              <span className=" mt-5 flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2 animate-[counter_5s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">+</span>
              <h3 className='text-sm md:text-lg'>Happy Clients</h3>
            </div>
          </div>

          <div className=" mt-5 md:mt-0">
            <div className="flex flex-col items-center justify-center">
              <AiOutlineFundProjectionScreen size={30}/>
              <span className=" mt-5 flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2 animate-[counter1_5s_ease-out_forwards] [counter-set:_num1_var(--num1)] before:content-[counter(num1)]">+</span>
              
              <h3 className='text-sm md:text-lg'>Projects</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 md:mt-0">
            <div className="flex flex-col items-center justify-center">
             <GrUserExpert size={30}/>
             <span className=" mt-5 flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2 animate-[counter2_5s_ease-out_forwards] [counter-set:_num2_var(--num2)] before:content-[counter(num2)]">+</span>
              <h3 className='text-sm md:text-lg'>Years of Experiance</h3>
            </div>
          </div>

         

        </div>

      </div>
    </section>
    </div>
    </div>
    </>
  )
}

export default Facts
