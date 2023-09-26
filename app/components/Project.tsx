'use client'
import React from 'react';


import project1 from '../../public/projects/thrive.png'





import project2 from '@/public/projects/pic4.png'
import project3 from '@/public/projects/pic3.png'

import ebay from '@/public/projects/ebay1.png'
import ebay1 from '@/public/projects/ebay2.png'
import ebay2 from '@/public/projects/ebay3.png'
import ebay3 from '@/public/projects/ebay4.png'
import ebay4 from '@/public/projects/ebay5.png'
import ebay5 from '@/public/projects/ebay6.png'
import burger1 from '@/public/projects/burger1.png'
import burger2 from '@/public/projects/burger2.png'
import burger from '@/public/projects/burger.png'
import thrive from '@/public/projects/thrive.png'
import thrive1 from '@/public/projects/thrive1.png'
import thrive2 from '@/public/projects/thrive2.png'
import thrive3 from '@/public/projects/thrive3.png'





import ProjectItem from './ProjectItem';

export interface Project{
  id: string;
  title: string;
  description: string;
  backgroundImage: any
  Technologies: string;
  item:any
 

}

const Project = () => {

  const projects: Project[] = [
    {
      id: '1',
      item:[
        {
          imageurl:thrive
        },
        {
          imageurl:thrive1
        },
        {
          imageurl:thrive2
        },
        {
          imageurl:thrive3
        }
      ],
      title: 'Thrive Sport',
      Technologies: 'Next js, Tailwind, Javascript',
      description: 'ThrivSports is the leading marketplace and booking engine Website for private sports coaching. I participated in the development of the website as a front end developer.',
      backgroundImage:project1,
      


    },
    {
      id: '2',
      item:[
        
        {
          imageurl:ebay
        },
        {
          imageurl:ebay1
        },
        {
          imageurl:ebay2
        },
        {
          imageurl:ebay3
        },
        {
          imageurl:ebay4
        },
        {
          imageurl:ebay5
        }
    ],

      Technologies: 'Next js, Tailwind, Typescript, Node Js, Mongodb',
      title: 'Ebay Clone',
      description: 'This is a clone of ebay website that is used to sell products and also to give information about the products that are sold in the website',
      backgroundImage: ebay

    },
    {
      id: '3',
      item:[
        
        {
          imageurl:burger
        },
       
        {
          imageurl:burger1
        },
        {
          imageurl:burger2
        },
      
    ],
      Technologies: 'Next js, Tailwind, Typescript, Express Js, Mongodb',
      title: 'Burger shop',
      description: 'This is a website for a burger shop that is used to sell burgers and also to give information about the burgers that are sold in the website it is not deplyed yet.',
      backgroundImage: project3

    }
  ]

  return (
    <div id='project' className='w-full lg:h-screen p-2'>
      <div className='max-w-screen-lg m-auto flex flex-col justify-center h-full md:pb-20 pb-5 md:mt-30 mt-20'>
        <h2 className='flex items-center justify-center uppercase text-[#3c6fde]'>Project</h2>
        
        <div className='grid md:grid-cols-2 gap-8 mt-16'>
          
          {projects.map((project) => (

          <ProjectItem
            title={project.title}
            backgroundImage={project.backgroundImage}
            id={project.id}
            description={project.description}
            Technologies={project.Technologies}
            item={project.item.map((items:any)=>(
              items.imageurl
            ))}
            
          />
          ))
        }
         
        </div>
        {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col itmes-center justify-center h-full'>
              <img src="projects/pic1.jpg" alt="" />
             <div className='absolute w-100% bg-[#00000099] h-100%'>
                <h3 className='text-center text-2xl'>Project 1</h3>
                <h4 className='text-center'> description</h4>
             </div>
              
              </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            
            <div><img src="projects/pic4.png" alt="" /></div>
              
           
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div><img src="projects/pic3.png" width={600} height={400} alt="" /></div>
          </div>
         
       
        </div> */}
      </div>
    </div>
  );
};

export default Project;