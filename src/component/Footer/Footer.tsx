import React from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="bg-[#212121] text-gray-200 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div className="text-white font-normal">
          <h3 className="text-[25px]  mb-4">More Info</h3>
          <ul className="space-y-2 text-[14px]">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="text-white font-normal">
          <h3 className="text-[25px]  mb-4">Our Links</h3>
          <ul className="space-y-2 text-[14px]">
            <li>
              <a href="#" className="hover:text-white ">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white ">
                Our Work
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-white font-normal">
          <h3 className="text-[25px]  mb-4">Contact Info</h3>
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-center gap-2">
              <FiMapPin size={30} /> Airway Blvd, California City, CA 93505
            </li>
            <li className="flex items-center gap-2">
              <FiPhone size={30} /> 815-575-8438 | 725-333-6078
            </li>
            <li className="flex items-center gap-2 ">
              <FiMail size={30} />
              <Link href={"mailto:info@martoshippingltd.com"}>
                info@martoshippingltd.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="text-white font-normal">
          <h3 className="text-[25px]  mb-4">Subscribe Us</h3>
          <form className="space-y-3 flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md text-black bg-white"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full  px-3 py-2 rounded-md text-black bg-white"
            />
            <button className="w-full border border-white py-2 rounded-md hover:bg-white hover:text-black transition">
              Subscribe
            </button>
          </form>
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="bg-blue-600 p-2 rounded-full w-[40px] h-[40px] justify-center items-center flex"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-sky-500 p-2 rounded-full w-[40px] h-[40px] justify-center items-center flex"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-orange-600 p-2 rounded-full w-[40px] h-[40px] justify-center items-center flex"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-red-600 p-2 rounded-full w-[40px] h-[40px] justify-center items-center flex"
            >
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2021 Marto Shipping service Ltd | All Rights Reserved.
      </div>
    </div>
  );
}
