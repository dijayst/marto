import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Content = ({
  text,
  text2,
  text3,
  text4,
  pathname,
}: {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  pathname: string;
}) => {
  return (
    <div className="justify-center leading-loose font-nunito items-center  flex flex-col text-white w-full p-10">
      <div className="flex md:flex-row flex-col gap-3">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className={
            pathname === "/"
              ? "md:text-[65px] text-[30px]  font-normal whitespace-nowrap"
              : "md:text-[65px] text-[26px]  font-normal whitespace-nowrap"
          }
        >
          {text}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className={
            pathname === "/"
              ? "md:text-[65px] text-[32px]  font-normal whitespace-nowrap "
              : "md:text-[65px] text-[26px]  font-normal whitespace-nowrap "
          }
        >
          {text3}
        </motion.h2>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={
          pathname === "/"
            ? "md:text-[17px] text-[14px] font-normal max-w-[70rem]"
            : "md:text-[17px] text-[14px] font-normal max-w-[70rem] hidden md:flex"
        }
      >
        {text2}
      </motion.h2>

      <Link
        href={"/getaquote"}
        className="bg-[#33accc]  text-white py-2 px-4 rounded-2xl"
      >
        {text4}
      </Link>
    </div>
  );
};
