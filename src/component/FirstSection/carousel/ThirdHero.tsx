import Image from "next/image";
import React from "react";

const ThirdHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center justify-center gap-2">
      <div className="image-container relative h-full w-full">
        <Image
          src={"/images/banner3.jpg"}
          alt="hero-images"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
        
      </div>

     

      
    </section>
  );
};

export default ThirdHero;
