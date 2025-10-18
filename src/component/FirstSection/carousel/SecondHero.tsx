import Image from "next/image";
import React from "react";

const SecondHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center relative">
     
      <div className="image-container relative h-full w-full">
             <Image
               src={"/images/banner1-2.jpg"}
               alt="hero-images"
               width={500}
               height={500}
               className="h-full w-full object-cover"
             />
             
           </div>
    </section>
  );
};

export default SecondHero;
