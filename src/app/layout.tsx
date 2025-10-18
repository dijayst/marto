"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/component/Navbar/Navbar";
import { usePathname } from "next/navigation";
import { Content } from "@/component/Content/content";
import Slider from "react-slick";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Footer from "@/component/Footer/Footer";

import "react-phone-input-2/lib/style.css";
import { exo2 } from "./fonts";
import { getUserSession } from "@/utils/getUserSession";

type FirstSectionProps = {
  isAboutPage?: boolean;
  children: React.ReactNode;
};

export default function RootLayout({
  children,
  isAboutPage,
}: FirstSectionProps) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUser() {
      const sessionUser = await getUserSession();
      if (sessionUser) {
        setUser(sessionUser); // 👈 user is automatically logged in
      }
    }
    checkUser();
  }, []);

  const pathname = usePathname();
  //const showLogoAndContent = pathname !== "/getaquote";
  const showLogoAndContent = !["/getaquote", "/login","/trackorder","/admin"].includes(pathname ?? "");

  let contentText1 = "";
  let contentTex2 = "";
  let contentTex3 = "";
  let contentTex4 = "";

  if (pathname === "/about") {
    contentText1 = "About Marto Shipping LTD.";
    contentTex2 =
      "Marto Shipping International Services invented express distribution and is the industry’s global leader, providing rapid, reliable, time-definite delivery to more than 220 countries and territories, connecting markets that comprise more than 90 percent of the world’s gross domestic product within one to three business days.";
    contentTex4 = "Get a quote";
  } else if (pathname === "/contact") {
    contentText1 = "Be In Touch With Us";
    contentTex2 = " The customer’s perception is our reality.";
    contentTex4 = "Get a quote";
  } else if (pathname === "/login9") {
    contentText1 = " More customers, more ";
    contentTex2 = "revenue, more quickly.";
    contentTex4 = "Get a quote";
  } else if (pathname === "/") {
    contentText1 = " Marto Shipping ";
    contentTex3 = "International Service";
    contentTex4 = "Get a quote";
    contentTex2 =
      "Put in your Track I.D and start Tracking your Package Instantly.";
  } else if (pathname && pathname.startsWith("/ourwork")) {
    contentText1 = " Marto Shipping ";
    contentTex3 = "International Service";
    contentTex2 =
      "We Offer International express deliveries; global freight forwarding by air, sea, road and rail;";
    contentTex4 = "Get a quote";
  } else if (pathname && pathname.startsWith("/services")) {
    contentText1 = "Marto Shipping ";
    contentTex3 = "International Service";
    contentTex2 =
      "Service to others is the rent you pay for your room here on earth.";
    contentTex4 = "Get a quote";
  }
  

  const sliderRef = useRef<Slider>(null);
  const router = useRouter();

  const slides =
    pathname === "/"
      ? [
          { image: "/images/banner1-1.jpg" },
          { image: "/images/banner1-2.jpg" },
          { image: "/images/banner1-3.jpg" },
        ]
         : pathname === "/login" || pathname === "/trackorder" || pathname === "/getaquote"  || pathname === "/admin" 
    ? []
      : [{ image: "/images/banner1.jpg" }];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease-in-out",
    draggable: false,
    fade: true,
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <html lang="en">
      <body className={`${exo2.className}`}>
        <Navbar />

        {showLogoAndContent && (
          <>
            <div className="fixed inset-0 z-[-1]">
              <Slider ref={sliderRef} {...settings}>
                {slides.map((item, index) => (
                  <div key={index} className="relative md:h-[38rem] h-90">
                    <Image
                      src={item.image}
                      alt="Background"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gray-700 opacity-20"></div>
                  </div>
                ))}
              </Slider>
            </div>

            <div>
              <div
                className={
                  pathname === "/"
                    ? " md:py-[150px] py-[2.7rem] flex flex-col items-center justify-center text-center px-4 md:mt-30"
                    : "md:py-[30px] py-[1.5rem] flex flex-col items-center justify-center text-center px-4 mt-30"
                }
              >
                {pathname && (
                  <Content
                    text={contentText1}
                    text2={contentTex2}
                    text3={contentTex3}
                    text4={contentTex4}
                    pathname={pathname}
                  />
                )}
              </div>
            </div>
          </>
        )}

        {children}

        <Footer />
      </body>
    </html>
  );
}
