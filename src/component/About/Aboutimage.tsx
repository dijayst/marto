"use client";
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa'
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Aboutimage() {
  return (
    <div>
       <section className='pb-15 bg-white'>
       <div className='grid grid-cols-1 gap-5 px-8  md:px-28'>
            
           <div className='grid md:grid-cols-[70%_30%] grid-cols-1 md:gap-0 gap-5'>
            {/*left */}
             <div className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5'>
              <div className='flex flex-col gap-5 justify-center items-center md:w-[23.5rem] md:h-screen h-[28rem] pb-10  border-[#ddd] border-1 '>
                <div className="w-full h-full overflow-hidden ">
    
                 <motion.div className="w-full h-full flex items-center justify-center mb-8 md:mb-0 "
                  whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      
                 >
                <Image
                width={200}
                height={500}
                  src="/images/kyle.jpg"
                  alt="Your Alt Text"
                  className=" object-cover w-full h-full mt-7" />
              </motion.div></div>
              <div className='flex flex-col gap-2 justify-center text-center items-center '>
                <h1 className='text-black font-normal text-xl'>Kyle Harrington</h1>
                <p className='text-[#999] font-normal text-base'>CEO</p>
                <div className="grid grid-cols-4 gap-3 ">
        <a href="#" className="bg-blue-600 p-2 rounded-full"><FaFacebookF /></a>
        <a href="#" className="bg-sky-500 p-2 rounded-full"><FaTwitter /></a>
        <a href="#" className="bg-orange-600 p-2 rounded-full"><FaLinkedinIn /></a>
        <a href="#" className="bg-red-600 p-2 rounded-full"><FaGooglePlusG /></a>
      </div></div>
      
             </div>
               <div className='flex gap-5 flex-col justify-center items-center md:w-[23.5rem] md:h-screen h-[28rem] pb-10 p-1 border-[#ddd] border-1 '>
             <div className="w-full h-full overflow-hidden">
    
                 <motion.div className="w-full h-full flex items-center justify-center mb-8 md:mb-0 "
                   whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
                <Image
                width={200}
                height={200}
                  src="/images/team1.jpg"
                  alt="Your Alt Text"
                   className=" object-cover w-full h-full mt-7"/>
              </motion.div> </div>
              <div className='flex flex-col gap-2 justify-center text-center items-center'>
                 <h1 className='text-black font-normal text-xl'>Steve Michael</h1>
                <p className='text-[#999] font-normal text-base'>Manager</p>
             <div className="grid grid-cols-4 gap-3 ">
        <a href="#" className="bg-blue-600 p-2 rounded-full"><FaFacebookF /></a>
        <a href="#" className="bg-sky-500 p-2 rounded-full"><FaTwitter /></a>
        <a href="#" className="bg-orange-600 p-2 rounded-full"><FaLinkedinIn /></a>
        <a href="#" className="bg-red-600 p-2 rounded-full"><FaGooglePlusG /></a>
      </div>
      </div>
              </div>
              
             </div>
              {/*right*/}
             <div className='grid grid-cols-1 '>
               <div className='flex flex-col gap-5 justify-center items-center md:w-[22rem] h-[23rem] pb-10 p-1 border-[#ddd] border-1 '>
             <div className="w-full h-full overflow-hidden">
    
                 <motion.div className="w-full h-full flex items-center justify-center mb-8 md:mb-0 "
                   whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      
                 >
                <Image
                width={200}
                height={200}
                  src="/images/william.jpg"
                  alt="Your Alt Text"
                className=" object-cover w-full h-full  mt-7"
                  />
              </motion.div></div>
               <div className='flex flex-col gap-2 justify-center text-center items-center'>
                 <h1 className='text-black font-normal text-xl'>William Farrar</h1>
                <p className='text-[#999] font-normal text-base'>Chief Operating Officer</p>
                
      <div className="grid grid-cols-4 gap-3 ">
        <a href="#" className="bg-blue-600 p-2 rounded-full"><FaFacebookF /></a>
        <a href="#" className="bg-sky-500 p-2 rounded-full"><FaTwitter /></a>
        <a href="#" className="bg-orange-600 p-2 rounded-full"><FaLinkedinIn /></a>
        <a href="#" className="bg-red-600 p-2 rounded-full"><FaGooglePlusG /></a>
      </div></div>
      
              </div>
              ' <div className='flex flex-col gap-5 justify-center items-center md:w-[22rem] h-[23rem] pb-10 p-1 border-[#ddd] border-1 '>
             <div className="w-full h-full overflow-hidden">
    
                 <motion.div className="w-full h-full  flex items-center justify-center mb-8 md:mb-0 "
                   whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
                <Image
                width={200}
                height={200}
                  src="/images/team5.jpg"
                  alt="Your Alt Text"
                        className=" object-cover w-full h-full  mt-7"
                  />
              </motion.div></div>
               <div className='flex flex-col gap-2 justify-center text-center items-center'>
             
                 <h1 className='text-black font-normal text-xl'>Elizabeth</h1>
                <p className='text-[#999] font-normal text-base'>Secretary</p>
                
      <div className="grid grid-cols-4 gap-3 ">
        <a href="#" className="bg-blue-600 p-2 rounded-full"><FaFacebookF /></a>
        <a href="#" className="bg-sky-500 p-2 rounded-full"><FaTwitter /></a>
        <a href="#" className="bg-orange-600 p-2 rounded-full"><FaLinkedinIn /></a>
        <a href="#" className="bg-red-600 p-2 rounded-full"><FaGooglePlusG /></a>
      </div></div>
      
              </div>
             </div>
             </div>
               {/*bottom */}
             <div className='grid md:grid-cols-[70%_30%] grid-cols-1 '>
               <div className=' grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5'>
                <div className='flex flex-col gap-5 justify-center items-center md:w-[23.5rem]  border-[#ddd] border-1 h-[21rem] pb-10 p-1'>
             <div className="w-full h-full overflow-hidden">
    
                 <motion.div className="w-full h-full flex items-center justify-center mb-8 md:mb-0 "
                   whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
                <Image
                width={200}
                height={200}
                  src="/images/cathleen.jpg"
                  alt="Your Alt Text"
                       className=" object-cover w-full h-full  mt-7"
                  />
              </motion.div></div>
               <div className='flex flex-col gap-2 justify-center text-center items-center'>
             
                 <h1 className='text-black font-normal text-xl'>Cathleen Blanton</h1>
                <p className='text-[#999] font-normal text-base'>Operating Officer</p>
                
      <div className="grid grid-cols-4 gap-3 ">
        <a href="#" className="bg-blue-600 p-2 rounded-full"><FaFacebookF /></a>
        <a href="#" className="bg-sky-500 p-2 rounded-full"><FaTwitter /></a>
        <a href="#" className="bg-orange-600 p-2 rounded-full"><FaLinkedinIn /></a>
        <a href="#" className="bg-red-600 p-2 rounded-full"><FaGooglePlusG /></a>
      </div></div>
      
              </div>
               <div className='flex flex-col gap-5 justify-center items-center md:w-[23.5rem] h-[28rem] pb-10 p-1 border-[#ddd] border-1 '>
             <div className="w-full h-full overflow-hidden ">
    
                 <motion.div className="w-full h-full flex items-center justify-center mb-8 md:mb-0 "
                   whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
                <Image
                width={200}
                height={200}
                  src="/images/team6.jpg"
                  alt="Your Alt Text"
                  className=" object-cover w-full h-full mt-7"
                  />
              </motion.div></div>
               <div className='flex flex-col gap-2 justify-center text-center items-center'>
             
                 <h1 className='text-black font-normal text-xl'>Diana</h1>
                <p className='text-[#999] font-normal text-base'>Marketing
      
      </p>
                
      <div className="grid grid-cols-4 gap-3 ">
        <a href="#" className="bg-blue-600 p-2 rounded-full"><FaFacebookF /></a>
        <a href="#" className="bg-sky-500 p-2 rounded-full"><FaTwitter /></a>
        <a href="#" className="bg-orange-600 p-2 rounded-full"><FaLinkedinIn /></a>
        <a href="#" className="bg-red-600 p-2 rounded-full"><FaGooglePlusG /></a>
      </div></div>
      
              </div></div>
              <div></div>
             </div>
           </div>
              </section>
    </div>
  )
}
