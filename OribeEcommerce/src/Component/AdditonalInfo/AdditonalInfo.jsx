import React from "react";
import Container from "../Container/Container";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa6";
import { IoReloadSharp } from "react-icons/io5";


const AdditonalInfo = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between mt-[28px] py-[30px]">
         <div className="flex items-center gap-2">
           <PiNumberTwoBold className="text-2xl" />
           <p className="font-DM font-normal text-[16px] text-[#6D6D6D]">Two years warranty</p>
         </div>
         <div className="flex  items-center gap-2">
          <FaCarSide className="text-2xl"/>
          <p className="font-DM font-normal text-[16px] text-[#6D6D6D]">Free shipping</p>
         </div>
         <div className="flex items-center gap-2">
          <IoReloadSharp className="text-2xl" />
          <p className="font-DM font-normal text-[16px] text-[#6D6D6D]">Return policy in 30 days</p>
         </div>
        </div>
      </Container>
    </>
  );
};

export default AdditonalInfo;
