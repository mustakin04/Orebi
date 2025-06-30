import React from "react";
import Container from "./../Container/Container";
import logo2 from "../../assets/OREBI©.png"

const Footer = () => {
  return (
    <div className="bg-[#f5f5f3] py-[33px]">
      <Container className="flex justify-between">
        <div>
          <h3 className="font-DM font-bold text-[16px] text-[#262626] mb-3">MENU</h3>
          <ul className=" font-DM font-normal text-[14px] text-[#6d6d6d]">
            <li>Home</li>
            <li className="my-2">About</li>
            <li>Shop</li>
            <li className="my-2">Contact</li>
            <li>Journal</li>
          </ul>
        </div>
        <div>
          <h3 className="font-DM font-bold text-[16px] text-[#262626] mb-3">MENU</h3>
          <ul className=" font-DM font-normal text-[14px] text-[#6d6d6d]">
            <li>Home</li>
            <li className="my-2">About</li>
            <li>Shop</li>
            <li className="my-2">Contact</li>
            <li>Journal</li>
          </ul>
        </div>
        <div>
          <h3 className="font-DM font-bold text-[16px] text-[#262626] mb-3">MENU</h3>
          <ul className=" font-DM font-normal text-[14px] text-[#6d6d6d]">
            <li>Home</li>
            <li className="my-2">About</li>
            <li>Shop</li>
            <li className="my-2">Contact</li>
            <li>Journal</li>
          </ul>
        </div>
        <div>
           <h4 className="font-DM font-bold text-[16px] text-[#262626] mb-3">(052) 611-5711</h4>
           <p className=" font-DM font-normal text-[14px] text-[#262626]">company@domain.com</p>
           <h5 className=" font-DM font-normal text-[14px] text-[#6d6d6d]">575 Crescent Ave. Quakertown, PA 18951</h5>
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
