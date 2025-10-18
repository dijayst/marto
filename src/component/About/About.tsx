import React from 'react'
import { FaBraille, FaTrophy,  } from 'react-icons/fa'
import Horixontalrule from '../Content/horixontalrule'
import Aboutimage from './Aboutimage';

export default function About() {
  return (
    <div className="bg-white">
        <section className="flex flex-col items-center justify-center w-full  mx-auto md:my-0 my-0 bg-white md:py-15 py-6 md:px-30 px-6  ">
     
          <div className="bg-[#33accc] justify-center mb-5 items-center p-5 rounded-full flex md:w-[70px] w-[50px] md:h-[70px] h-[50px]"> <FaBraille  color="#fff" size={30}/></div>
         
         <h1 className="text-[#000] md:text-[50px] text-[17px] whitespace-nowrap">About Our Business</h1>
        
          <div className=" justify-center items-center w-[15rem] md:py-3 flex ">
            <Horixontalrule />
          </div>
      <p className="text-[#999] md:text-[16px] text-[13px] leading-loose">Marto Courier International Services is a leading company in express industry. Established in 2001 with its cutting edge technology, dedicated infrastructure and world class services it is a one stop service provider and has been playing an important role in the supply chain of a number of industries. As the supply chain gets increasingly integrated in to the productivity of business, Marto Courier Worldwide Express with its sphere of influence expertise and unique Air/Surface infrastructure propped up has emerged as a major distribution consultant to some of the biggest brands across the industries. Speed and reliability are the key value drives at Marto Courier International Services. To ensure these the Marto Courier International Services uses state-of-the-art-technology from collection to delivery.
         Time overwhelming paper work is minimized and consignment can be traced & tracked and delivery confirmed online.`</p>
        </section>
        <section className='justify-center items-center text-center flex flex-col bg-white md:py-10 py-10'>
            <div className="bg-[#33accc] justify-center mb-5 items-center p-5 rounded-full flex md:w-[70px] w-[50px] md:h-[70px] h-[50px]"> <FaTrophy color="#fff" size={30}/></div>
                  <h1 className="text-[#000] md:text-[50px] text-[17px]">Our Team</h1>
                  
                    <div className=" justify-center items-center w-[15rem] py-3 flex ">
                      <Horixontalrule />
                    </div>
       <p className="text-[#999] font-normal md:text-[16px] text-[13px]">These are the few people that made Marto Courier International Services a success.</p>
     
     
    
        </section>

        
       <Aboutimage/>













       
    </div>
  )
}
