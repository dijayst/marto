import Image from "next/image";
import React from "react";

const FirstHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center relative">
        
         <div className="image-container relative h-full w-full">
               <Image
                               src="/images/banner1-1.jpg" 
                               alt="Background"
                               fill
                               className="object-cover z-[-10] "
                               priority />
                
              </div>

       </section>
  );
};

export default FirstHero;
