"use client";
import React from "react";
import Horixontalrule from "../Content/horixontalrule";
import { BiWorld } from "react-icons/bi";
import CustomMap from "../CustomMap/CustomMap";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="flex flex-col items-center justify-center w-full mx-auto md:my-0 my-0  md:py-15 py-6 md:px-30 px-6  ">
        <div className="bg-[#33accc] justify-center mb-5 items-center p-5 rounded-full flex w-[70px] h-[70px]">
          
          <BiWorld color="#fff" size={30} />
        </div>

        <h1 className="text-[#000] md:text-5xl text-19 whitespace-nowrap">
          Contact Us
        </h1>

        <div className=" justify-center items-center w-[15rem] md:py-3 flex ">
          <Horixontalrule />
        </div>
        <p className="text-[#999] text-lg leading-loose">
          Our Customer Chat Agents Works Around the clock 24/7.
        </p>
      </section>
      <section className="flex md:flex-row flex-col gap-10 px-4 md:max-w-4xl justify-center items-center text-center">
        <div className="md:w-[65%]  w-full">
          
          <CustomMap />
        </div>
        <div className="md:w-[35%] w-full text-[#999] text-[17px] font-normal text-justify">
          <h1 className="text-[#33accc] text-[17px] font-semibold">
            Our Contacts :
          </h1>
          <div className="flex">
            <p className="text-[#999] font-semibold">Phone :</p>
            <div>
              <p> 725-333-6078</p>
              <p> :815-575-8438</p>
            </div>
            <p></p>
          </div>
          <div className="flex">
            <p className="text-[#999] font-semibold">Email :</p>
            <Link href={"mailto:info@martoshippingltd.com"}>
                info@martoshippingltd.com
              </Link>
           
          </div>
          <div className="flex">
          <p className="text-[#999] font-semibold">Address : </p>
          <div className="flex flex-col"><p> 9546 Rachel Road Clay
          Township </p><p> MI, U.S.A.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
