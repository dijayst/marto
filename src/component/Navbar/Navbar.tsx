"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
//import { useAuthStore } from "../Login/login";
import { useAuthStoree } from "../Ustestore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  //const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  // const logout = useAuthStore((state) => state.logout);

  const { isLoggedIn, logout } = useAuthStoree(); 
    const router = useRouter();
const handleLogout = () => {
    logout();
    router.push("/login"); // redirect after logout
  };
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/ourwork", label: "Our Work" },
    { href: "/contact", label: "Contact" },

    ...(isLoggedIn
      ? [
          {
            href: "/trackorder",
            label: "Track Order",
            icon: <CiDeliveryTruck size={15} color="black" />,
          },{ href: "#", label: "Logout", onClick: handleLogout, icon: <FaLockOpen size={15} /> }
          // { href: "/", label: "Profile", icon: <FaLock size={12} /> },
        ]
      : [{ href: "/login", label: "Signup", icon: <FaLockOpen size={15} /> }]),
  ];

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[#f8f8f8] font-nunito md:px-22 ">
      <nav className="flex md:px-0 px-5  w-full  justify-between ">
        <div className="flex   text-left  space-x-2 text-[#163546] pt-2">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/martrologo1.png"
              alt="Logo"
              className="w-20 h-13 "
            />
            <p className="font-[20] font-inter  md:text-[26px] text-[27px] text-[#000] whitespace-nowrap">
              Marto Shipping
            </p>
          </Link>
        </div>

        






         <div className="flex items-center justify-center">
      <ul className="bg-[#f8f8f8] hidden md:flex items-center gap-0 text-sm font-medium uppercase whitespace-nowrap">
        {links.map((link, index) => (
          <li
            key={index}
            onClick={link.onClick}
            className={`hover:text-white hover:bg-[#33accc] flex items-center py-4 px-2 ${
              pathname === link.href ? "bg-[#33accc] text-white" : "text-[#777]"
            }`}
          >
            {link.icon}
            {link.href !== "#" ? (
              <Link href={link.href}>{link.label}</Link>
            ) : (
              <span>{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden p-2 ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <p className="text-black font-bold">X</p>
            ) : (
              <RxHamburgerMenu size={35} color="black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div>
            <ul className="md:hidden flex flex-col  pb-4 bg-[#e4e4e4] h-[26rem] mx-4  font-normal text-black">
              {links.map((link, index) => (
                <li
                 onClick={link.onClick}
                 key={index}
                  className={`${
                    pathname === link.href
                      ? "bg-[#33accc] text-white "
                      : " text-[#777] "
                  }hover:text-white hover:bg-[#33accc] text-[14px] justify-center text-center  flex items-center py-4 px-2`}
                >
                  {link.icon}
                  <Link key={index} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
