import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const SampleNetArrow = (props) => {
   const {  style, onClick } = props;
  return (
    <div
      className="!flex absolute top-[30%] right-0 w-[38px] h-[38px]  justify-center items-center bg-[#979797] rounded-full"
      style={{ ...style }}
      onClick={onClick}
    >
        <FaArrowRight className='text-xl text-white' />
    </div>
  );
}

export default SampleNetArrow