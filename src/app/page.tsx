"use client";
import { services } from "@/component/Content/data";
import Horixontalrule from "@/component/Content/horixontalrule";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsEmojiSmile } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-white">
      
      <section className="flex flex-col items-center justify-center w-full  mx-auto  bg-white md:py-20 py-6 px-6  ">
        <p className="text-[#000] text-[23px]  md:text-[50px] text-center">
          Our Specialities
        </p>

        <div className=" justify-center items-center w-[15rem] py-3 flex ">
          <Horixontalrule />
        </div>

        <p className="text-[#999] md:text-[16px] text-[14px] text-2xl leading-relaxed max-w-3xl text-center px-2">
          Our technology-enabled logistics solutions, anchored by a first-class
          customer service team and dedicated riders, create a seamless customer
          experience for both retailers and customers
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-12 w-full max-w-6xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 flex flex-col justify-center items-center text-center shadow-2xl transition"
              onClick={() => router.push(`/service/${service.id}`)}
            >
              <div className="w-16 h-16 flex items-center justify-center text-3xl mb-6">
                <Image
                  src={service.image}
                  alt="Background"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-normal text-black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[14px] md:text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="relative w-full md:min-h-screen min-h-[18rem]  overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{
              backgroundImage: `url("/images/banner2.jpg")`,
            }}
          ></div>

          <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-15 md:py-[225px] py-0 pt-20 lg:pt-40 justify-center text-center relative z-10">
            <p className="md:text-[65px] text-[22px] font-normal mt-15 text-white">
              Giving The Best Solutions
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white justify-center text-center items-center px-25 md:py-[100px] py-10 md:px-0 flex flex-col gap-5">
        <div className="bg-[#33accc] justify-center items-center p-5 rounded-full flex md:w-[70px] w-[50px] md:h-[70px] h-[50px]">
          <FaTrophy color="#fff" size={30} />
        </div>

        <h1 className="text-[#000] md:text-[50px] text-[19px] ">
          Always Delivering Best Of Our Services
        </h1>

        <div className=" justify-center items-center w-[15rem] py-3 flex ">
          <Horixontalrule />
        </div>
        <p className="text-black md:text-[17px] text-[14px]">
          To give real service you must add something which cannot be bought or
          measured with money, and that is sincerity and integrity.
        </p>
      </section>

      <section>
        <div className="relative w-full md:min-h-screen min-h-[18rem]  overflow-hidden justify-center text-center items-center flex">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("/images/banner3.jpg")`,
            }}
          ></div>

          <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-15 md:py-[225px] py-0 pt-20 lg:pt-40 justify-center text-center relative z-10">
            <p className="md:text-[65px] text-[22px] font-normal mt-15 text-white">
              Making Our Customers Satisfied
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white justify-center text-center items-center px-25  md:py-[100px] py-10 flex flex-col gap-5">
        <div className="bg-[#33accc] justify-center items-center p-5 rounded-full flex md:w-[70px] w-[50px] md:h-[70px] h-[50px]">
          <BsEmojiSmile color="#fff" size={30} />
        </div>

        <h1 className="text-[#000] md:text-5xl text-2xl">
          Making Our Customers Happy
        </h1>

        <div className=" justify-center items-center w-[15rem] py-3 flex ">
          <Horixontalrule />
        </div>
        <p className="text-black text-[14px] md:text-[17px]">
          We see our customers as invited guests to a party, and we are the
          hosts. It’s our job every day to make every important aspect of the
          customer experience a little bit better
        </p>
      </section>
    </div>
  );
}
