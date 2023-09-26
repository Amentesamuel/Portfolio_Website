'use client'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


import React, { FormEvent, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FormControl,Heading,Input,Container,FormLabel } from '@chakra-ui/react';

import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Lottie from 'lottie-react';
import animation_loading from '@/public/animation_loading.json'
import ContactImg from '@/public/animation_contact.json';
type contactfield={
  [key:string]:string | undefined
 name:string | undefined
  
 
 email:string | undefined
subject:string | undefined
message:string | undefined
}
type errorfield={
 name:boolean,
 
 
    email:boolean,
    subject:boolean,
    message:boolean
}

function Contactpage(this: any) {
    const initialstate:contactfield={
        name:"",
        
       

        email:"",
        subject:"",
        message:""

    }
    const initialerrorstate:errorfield={
        name:false,
        
        
        email:false,
        subject:false,
        message:false
    }
    const[data,setData]=useState<contactfield>(initialstate)
    const[error,setError]=useState<errorfield>(initialerrorstate)
    const[PhoneNumber,setphoneNumber]=useState()
    const[valid,setvalid]=useState(true)
    const[status,setstatus]=useState(false)
    const[Success,setSuccess]=useState(false)
    const[result,setresult]=useState("")
    const[isloading,setisloading]=useState(false)

    const handlechange=(value:any)=>{
        
        setphoneNumber(value)
        setvalid(ValidatephoneNumber(value))

    }
    const ValidatephoneNumber=(phoneNumber:any)=>{
        const phoneNumberPattern=/^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber)
    }

    const handleSubmit=async(e:any)=>{
      e.preventDefault()
    
      
      setError(initialerrorstate)
      let hasErr=false
      await Object.keys(initialerrorstate).map((err)=>{
        if(data[err]===""||data[err]===undefined){
          setError({...error,[err]:true})
          hasErr=true
          
    }
    if(PhoneNumber===undefined){
      setvalid(false)
      hasErr=true
    }
    setisloading(true)
  })
  if(hasErr){
    return
  }
  setstatus(true)
 
  const response=await fetch('/api/contact',{
    method:'POST',
    body:JSON.stringify({
      name:data.name,
      email:data.email,
      subject:data.subject,
      message:data.message,
      PhoneNumber:PhoneNumber
    }),
   

  })
  
  const delay=(ms:number)=>new Promise((res)=>setTimeout(res,ms))
  const datasend=await response.json();
  setresult(datasend.message)
  setSuccess(true)
  setstatus(false)
  setData(initialstate)
  setError(initialerrorstate)

  await delay(3000)
  setSuccess(false)


  
  
  
}
    
  return (
    <>
    <div id='contact' className='w-full lg:h-full'>
      <div className='max-w-screen-lg m-auto px-2 py-16 w-full md:mt-20 '>
       
        <h2 className='py-4 flex items-center justify-center text-[#3c6fde]'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8 mt-20'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Lottie
                  animationData={ContactImg}
                  height={300}
                  width={300}
                  className='m-auto'
                />
              </div>
              <div>
                <h2 className='py-2'>Amente Samuel</h2>
                <p>Full Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/amente-samuel-957517286/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Amentesamuel'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                  
                    href='mailto:amentesamuel@gmail.com'
                    target='_blank'
                    rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  </a>
                  <a
                    href='https://www.instagram.com/Tmapmusic'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaInstagram />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form 
               
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex  flex-col'>
                    
                    <label 
                   
                    className='uppercase text-sm py-2 '>Name</label>
                    <input
                    value={data.name??""}
                    onBlur={()=>setError({...error,name:true})}
                    onChange={(e)=>setData({...data,name:e.target.value})}

                     
                      
                      className='border-2 rounded-lg p-3 flex border-gray-300 '
                      type='text'
                      name='name'
                    />
                    {error.name&&!data.name&&<span className="text-red-500">Name is required</span>}
                    
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <PhoneInput

                    inputStyle={{width:'100%',height:'50px',borderRadius:'10px'}}
                    
                
                 
                 
                    
                    
                    
                    country={'et'}
                    value={PhoneNumber}
                    onChange={handlechange}
                    />
                    {valid&&<span className='text-red-500'>Please inter 10 digit Number</span> }
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                  value={data.email ??""}
                  onBlur={()=>setError({...error,email:true})}
                  onChange={(e)=>setData({...data,email:e.target.value})}
                    
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                  {error.name&&!data.name&&<span className="text-red-500">Email is required</span>}
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                  value={data.subject}
                  onBlur={()=>setError({...error,subject:true})}
                  onChange={(e)=>setData({...data,subject:e.target.value})}
                   
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                  
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                  value={data.message}
                  onBlur={()=>setError({...error,message:true})}
                  onChange={(e)=>setData({...data,message:e.target.value})}
                    className='border-2 rounded-lg p-3 border-gray-300'
                    
                    name='message'
                  >
                    
                  </textarea>
                </div>
                <button onClick={handleSubmit}  className=' cursor-pointer hover:scale-105 ease-in duration-300 w-full p-4 text-gray-100 mt-4' >
                  
                {(status && !Success) ?<div className='flex items-center justify-center w-full h-full'><Lottie  animationData={animation_loading} style={{width:100}} /> </div>: "Send Message"}
               
                </button>
                {(Success&&!status) &&<div className={`${Success?"text-blue-500":"text-pink-500"} my-8 text-center text-xl `}>
                  {result}
                  
                </div>
                
                }
              </form>
            </div>
          </div>
        </div>
        {/* <div className='flex justify-center py-12'>
          <Link href='/'>
            
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            
          </Link>
        </div> */}
      </div>
    </div>

    </>
  )
  
}

export default Contactpage
