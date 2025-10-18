"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from "next/image";
import { FaSearchPlus } from 'react-icons/fa';

export default function Tab() {
    const router = useRouter();
     const [activeTab, setActiveTab] = useState("All");


  return (
    <div className='bg-white'>
      
          <div className="px-4  md:px-0 md:my-0 my-10 ">
  <div className="bg-white rounded-md  whitespace-nowrap">
    {/* Tabs */}
    <div className=" flex md:flex-wrap md:gap-1  bg-white border-b font-normal md:text-[17px] text-[14px]  border-gray-200 mb-6 justify-center text-center  ">
      {["All", "On-Road", "Airways","Railways","Waterways"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`md:pb-2 md:text-[17px] text-[14px]  hover:bg-[#33accc] whitespace-nowrap opacity-80 text-black   md:p-[10px] p-2 hover:text-white ${
            activeTab === tab
              ? "border-b-2 bg-[#33accc] text-white"
              : "text-black "
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

  
    {activeTab === "All" && (
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">

      



             <div className="relative group">
  <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
          <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work2.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
        <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work3.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>  <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work4.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
       <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work5.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
       <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work6.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
       <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work7.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
       <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work8.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
       <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work9.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
       <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work10.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
       <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work11.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
      </div>
    )}

   
    {activeTab === "On-Road" && (
      <div className="text-[#343C6A]">  
     <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
     <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work2.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
          <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work7.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
        <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work9.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div> </div>
         </div>
    )}
    {activeTab === "Airways" && (
      <div className="text-[#343C6A]"> 
       <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
     <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work1.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
          <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work4.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
        <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work5.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div> </div>
    
          </div>
    )}

     {activeTab === "Railways" && (
      <div className="text-[#343C6A]">
         <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
     <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work3.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
          <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work11.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
       </div>
    
            </div>
    )}
     {activeTab === "Waterways" && (
      <div className="text-[#343C6A]"> 
       <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  ">
     <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work6.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover " />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
          <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work8.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div>
        <div className="relative group"> <Image
          width={200}
          height={200}
            src="/images/work10.jpg"
            alt="Your Alt Text"
            className="w-full md:h-60 h-50 object-cover" />
             <div className="absolute rounded-2xl inset-0 flex flex-col items-center justify-center px-5  text-white text-xl  opacity-0 group-hover:opacity-100 transition">
      <FaSearchPlus size={70} />
    </div>
      </div> </div>
    
           </div>
    )}
  </div>
</div>

    </div>
  )
}
