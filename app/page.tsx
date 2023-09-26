import Image from 'next/image'
import Navbar from './layout/Navbar'


import Hero from './components/Hero'
import About from './components/About'
import Facts from './components/Facts'
import Skill from './components/Skill'


import Project from './components/Project'
import Resume from './components/Resume'
import Contactpage from './components/Contactpage'


export default function Home() {
  return (
  <>   
    <Navbar/>
    <Hero/>
    <About/>
    <Facts/>
    <Skill/>
    <Project/>
    <Resume/>

    <Contactpage/>
   
    
    
    
  
  
   
   </>
  )
}
