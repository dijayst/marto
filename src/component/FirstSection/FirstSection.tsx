"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SecondHero from "./carousel/SecondHero";
import ThirdHero from "./carousel/ThirdHero";
import FirstHero from "./carousel/FirstHero";



type FirstSectionProps = {
  isAboutPage?: boolean;
};
const FirstSection : React.FC<FirstSectionProps> = ({ isAboutPage = false }) => {
  const sliderRef = useRef<Slider>(null);
  const router = useRouter();

  const slides = [
    { image: <FirstHero />   },
    { image: <SecondHero />
          },
    { image: <ThirdHero />, text: isAboutPage},
  ];
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: "ease-in-out",
  draggable: false, 
};


  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
    
    <div className="relative w-full  bg-black overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((item, index) => (
            <div key={index} className="relative w-full  ">
              {item.image}
             
              <div className="absolute inset-0 bg-black/40 z-10" />
            </div>
          ))}
        </Slider>

       
      </div>
      
      </>
    
   

   
     

  );
};

export default FirstSection;
