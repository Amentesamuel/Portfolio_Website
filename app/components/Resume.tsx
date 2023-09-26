'use client'
import React from 'react';


const Resume = () => {





  return (
    <div id='resume' className='w-full lg:h-screen p-2'>
      <div className='max-w-screen-lg m-auto flex flex-col lg:mt-40 w-full items-center justify-center  md:h-screen lg:pb-20'>
        <h2 className='flex items-center justify-center  uppercase text-[#3c6fde]'>Resume</h2>
        <div className='w-full mt-10'>
        <div className='grid grid-cols-2   max-w-screen-xl gap-10 '>
        <div className='flex flex-col items-center '>
          <button  className='text-2xl  w-40'>Education</button>
          
<ol className="relative border-l border-gray-300 dark:border-gray-700 mt-5">                  
    <li className="mb-10 ml-4 ">
        <div className="absolute w-3 h-3 bg-[#3c6fde] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bsc degree in Software Engineering</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">ArbaMinch University</p>        
    </li>

</ol>


         
       </div>
       <div className='flex flex-col items-center'>
          <button className='text-2xl  w-40 '>Work</button>
          <ol className="md:ml-20 ml-0 mt-5 relative border-l border-gray-300 dark:border-gray-700">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-[#3c6fde] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2021</time>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend Developer </h3>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Guzo.et</h3>
        <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Worked as Frontend developer in Guzo.et which is a bas ticket reservation system that lets users book ticket all over the country</p>
      
    </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-[#3c6fde] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2022</time>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Database Administrator </h3>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Addis Tech</h3>
        <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Addis Tech Group plc is a full-service digital marketing agency based in Addis Ababa, Ethiopia.it is a company that provide digital marketing in many social medias and also provide a website development.</p>
      
    </li>
  
</ol>
          
       </div>
       </div>

       
       
        
      </div>
    </div>
    </div>
  );
};

export default Resume;