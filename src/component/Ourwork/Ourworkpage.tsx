import React from 'react'
import { FaBraille } from 'react-icons/fa'
import Horixontalrule from '../Content/horixontalrule'
import Tab from '../Tab/Tab'

export default function Ourworkpage() {
  return (
    <div className='bg-white'>
       <section className="flex flex-col items-center justify-center w-full  mx-auto md:my-0 my-0 bg-white md:py-15 py-6 md:px-30 px-6  ">
                  
                      <div className="bg-[#33accc] justify-center items-center p-5 rounded-full md:w-[70px] w-[50px] md:h-[70px] h-[50px]"> <FaBraille  color="#fff" size={30}/></div>
                     
                     <h1 className="text-[#000] md:text-5xl text-19 whitespace-nowrap">Our Work</h1>
                    
                      <div className=" justify-center items-center w-[15rem] md:py-3 flex ">
                        <Horixontalrule />
                      </div>
                  <p className="text-[#999] text-lg leading-loose">Here is a pictorial Gallery of what we do.</p>
                    </section>

                     <section>
                                    <Tab/>
                                  </section>
    </div>
  )
}
