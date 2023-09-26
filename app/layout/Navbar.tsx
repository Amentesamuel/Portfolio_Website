'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

import { useState } from 'react'
import { AiFillFacebook, AiFillGithub, AiFillHome, AiFillLinkedin, AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'

import {FaGithub, FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'





const Navbar=()=> {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90)
        
        {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);
    
  return (
    <>
   {/* <div className=' top-0 w-full h-16  sticky glass   '>

<div className='flex items-center justify-between h-full   max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
<div className="md:flex md:items-center md:gap-12">
<Link href='#home'><img src='icons/icon.png' width={50}/></Link>
</div>
<div className='hidden md:flex '> 
<ul className='hidden md:flex gap-5'>
    <li>
      <Link
        id='home'
        
        className="text-black transition hover:text-gray-500/75"
        href="#home"
      >
        <h4 className='text-xl'>Home</h4>
      </Link>
    </li>

    <li>
      <Link
      id='about'
      
        className="text-black transition hover:text-gray-500/75"
        href="#about"
      >
        <h4 className='text-xl font-md'>About</h4>
      </Link>
    </li>

    <li>
      <Link
        id='skills'
     
        className="text-black transition hover:text-gray-500/75"
        href="#skills"
      >
        <h4 className='text-xl'>Skills</h4>
      </Link>
    </li>

    <li>
      <Link
        id='services'
     
        className="text-black transition hover:text-gray-500/75"
        href="#services"
      >
        <h4 className='text-xl'>Services</h4>
      </Link>
    </li>

    <li>
      <Link
        id='portfolio'
      
        className="text-black transition hover:text-gray-500/75"
        href="#portfolio"
      >
        <h3 className='text-xl'>Portfolio</h3>
      </Link>
    </li>

    <li>
      <Link
        id='contact'
     
        className="text-black transition hover:text-gray-500/75"
        href="#contact"
      >
        <h4 className='text-xl'>Contact</h4>
      </Link>
    </li>
  </ul>
  
</div>
<div onClick={handleNavbar} className=" md:hidden cursor-pointer">


    {navbarOpen ? (
       <AiOutlineClose size={20} />
    ) : (
        <AiOutlineMenu size={25}/>
        

    )}
    
    
  
</div>
<div className={
    navbarOpen ? "fixed top-0 left-0 w-[65%]  h-screen bg-gray-300 ease-in duration-500 " : 
    "fixed left-[-100%] top-0 p-10 ease-in-out  duration-300 "
}>
    <div className='flex flex-col py-4 items-center justify-center  w-full h-full'>
        <div className='flex  items-center justify-center w-full h-full'>

        
    <ul className='flex flex-col gap-4 text-xl'>
    <li >
        
      <Link
        id='home'
        onClick={handleNavbar}
        className="text-black cursore-pointer flex gap-2  hover:text-gray-500/75"
        href="#home"
      >
        <AiFillHome/>
        Home
      </Link>
    </li>

    <li>
      <Link
      id='about'
      onClick={handleNavbar}
        className="text-black  flex gap-2 cursore-pointer transition hover:text-gray-500/75"
        href="#about"
      >
        <BsFillPersonFill/>
        About
      </Link>
    </li>

    <li>
      <Link
        id='skills'
      onClick={handleNavbar}
        className="text-black flex gap-2 cursore-pointer transition hover:text-gray-500/75"
        href="#skills"
      >
        <GiSkills/>
        Skills
      </Link>
    </li>

    <li>
      <Link
        id='services'
      onClick={handleNavbar}
        className="text-black flex gap-2 cursore-pointer transition hover:text-gray-500/75"
        href="#services"
      >
        <MdOutlineMiscellaneousServices/>
        Services
      </Link>
    </li>

    <li>
      <Link
        id='portfolio'
      onClick={handleNavbar}
        className="text-black flex gap-2  cursore-pointer transition hover:text-gray-500/75"
        href="#portfolio"
      >
        <BsFillBriefcaseFill/>
        Portfolio
      </Link>
    </li>

    <li>
      <Link
        id='contact'
      onClick={handleNavbar}
        className="text-black flex gap-2 cursore-pointer transition hover:text-gray-500/75"
        href="#contact"
      >
        <RiContactsFill/>
        Contact
      </Link>
    </li>
  </ul>
  </div>
  <div className='flex w-[50%] h-[50%] justify-center '>
  <ul className='flex gap-2 item center justify-center '>
        <li className='cursour-pointer hover:scale-105'> <Link href="https://www.facebook.com/" target="_blank" ><AiFillFacebook size={40}/></Link></li>
        <li className='cursour-pointer hover:scale-105'> <Link href="https://www.linkedin.com/in/" target="_blank"><AiFillLinkedin size={40}/></Link></li>
        <li className='cursour-pointer hover:scale-105'> <Link href="https://www.githab.com/" target="_blank"><AiFillGithub size={40}/></Link></li>
        <li className='cursour-pointer hover:scale-105'> <Link href="https://www.upwork.com/" target="_blank"><BiLogoUpwork size={40}/></Link></li>
        
        
  </ul>
  </div>

    </div>

</div>

</div>



</div> */}

<div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='w-full h-full '>
        
        <div className=''></div>
      <div className='flex items-center justify-between h-full   max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <Link href='/'>
          <h3 className='text-xl' >Amente</h3>
          
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#project'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNavbar}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          navbarOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            navbarOpen
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <img src="icons/icon.png" alt="" width={40} />
              </Link>
              <div
                onClick={handleNavbar}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
           
          </div>
          <div className='py-4 flex flex-col mt-10'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNavbarOpen(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNavbarOpen(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNavbarOpen(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#project'>
                <li onClick={() => setNavbarOpen(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#resume'>
                <li onClick={() => setNavbarOpen(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNavbarOpen(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/amente-samuel-957517286/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                    <span className='sr-only'>LinkedIn</span>
                  </div>
                </a>
                <a
                  href='https://github.com/Amentesamuel'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a href='mailto:amentesamuel@gmail.com'>
                  <div
                    
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                    href='https://www.instagram.com/Tmapmusic'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                      <FaInstagram />
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>




  
    </>
  )
}

export default Navbar
