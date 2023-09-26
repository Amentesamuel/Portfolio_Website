'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Carousel from 'react-material-ui-carousel'
import { RiRadioButtonFill } from 'react-icons/ri'

const ProjectItem = ({Technologies,item,title, backgroundImage, description, id}:any) => {
  

 
  
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div className='p-6 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-[#ecf0f3] '>
    <Image className='rounded-xl group-hover:opacity-10 ' src={backgroundImage} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-black tracking-wider text-center'>{title}</h3>
        
        {/* <button onClick={handleShow} className='border p-2 bg-white rounded-md  items-center justify-center flex w-full hover:scale-105'>More Info</button> */}
      {/* The button to open modal */}
<label htmlFor={id} className="btn bg-blue-500 flex items-center justify-center"><h3>More Info</h3></label>

    </div>


{/* Put this part before </body> tag */}
<input type="checkbox" id={id} className="modal-toggle"   />
<div className="modal h-screen w-full">
  <div className="modal-box h-full w-full">
  <div className="modal-close flex items-start w-full justify-end" onClick={handleShow}>
      <label htmlFor={id} className="btn  flex items-center justify-center"><AiOutlineClose/></label>
   
      </div>
    <div className='mt-10'>
      <Carousel className='w-full'>   
      {item.map((items:any)=>(
          <div className='flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-[#ecf0f3] '>
          <Image className='rounded-xl  h-52' src={items} alt='/' /> 
          </div>
        ))
        }
        
          </Carousel>
          
    </div>
  <div className='flex gap-4'>
   <div>
   <h2 className='mt-4'>{title}</h2>
   <h3 className='mt-6'>{description}</h3>
   </div>
    
   <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                 {Technologies}
              </p>
              {/* <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p> */}
            </div>
          </div>
        </div>

  </div>

   
      
      
    
    {/* <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{description}</p>
    <div className="modal-action flex ">
      <label htmlFor={id} className="btn ">Close!</label>
    </div> */}
  </div>
  
        
      

      
</div>

    
    
 </div>
  )
}

export default ProjectItem


