import React, { useEffect, useRef, useState } from "react";
import Container from "../Container/Container";
import { IoReorderTwo } from "react-icons/io5";
import Search from "../Search/Search";
import { MdMan } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiLuggageCartFill } from "react-icons/ri";
import { HiMiniBars2 } from "react-icons/hi2";

const Header = () => {
  const [categoryShow, setCategoryShow] = useState(false);
   const [accountShow, setAccountShow] = useState(false);
  const dropRef = useRef();
  const accountRef=useRef()
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (dropRef.current.contains(e.target)) {
        setCategoryShow(true);
      } else {
        setCategoryShow(false);
      }
       if (accountRef.current.contains(e.target)) {
        setAccountShow(true);
      } else {
        setAccountShow(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#D8D8D8] py-[12px]">
      <Container className="flex justify-between items-center">
        <div className="flex relative  items-center gap-[10px]">
          <IoReorderTwo ref={dropRef} />
          <p className="font-DM font-normal text-[14px] text-primary">
            Shop by Category
          </p>
          {categoryShow && (
            <div className=" ">
              <ul className="absolute top-8 left-0 bg-black  w-[263px] bg-primary z-[999]">
                <li
                  className="border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold"
                >
                  Accesories
                </li>
                <li
                  className="border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold "
                >
                  Furniture
                </li>
                <li
                  className="border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold"
                >
                  Electronics
                </li>
                <li
                  className="border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold"
                >
                  Clothes
                </li>
                <li
                  className="border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold"
                >
                  Bags
                </li>
                <li
                  className="border-[1px] border-white border-opacity-10 py-[16px]  
                                font-DM font-normal text-[14px] pl-[21px] text-white hover:ml-[9px] hover:font-bold"
                >
                  Home appliances
                </li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <Search
            className="w-[601px] py-[16px] pl-[21px] text-[#c4c4c4]"
            placeholder="Search Products"
          ></Search>
        </div>
        <div className="flex relative">
          <div className="flex" ref={accountRef}>
            <MdMan />
            <IoMdArrowDropdown className="ml-[10px]" />
          </div>
             {
                                accountShow && (
                                    <div className='absolute top-[20px] right-0 w-[200px] z-[99]'>
                                        <p className='font-DM font-bold text-[14px] text-white
                                         bg-primary py-[16px] text-center'>MY Account</p>
                                        <h2 className='font-DM font-normal text-[14px] text-black
                                         bg-red-200 py-[16px] h-[50px] text-center'>Log Out</h2>
                                    </div>)
                            }

          <RiLuggageCartFill className="ml-[41px]" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
