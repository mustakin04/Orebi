import React from "react";
import Container from "../Container/Container";
import logo from "../../assets/OREBI©.png";
const Navbar = () => {
  return (
    <div>
      <Container className="flex py-[32px]">
        <div className="w-[20%]">
          <img src={logo} alt="" />
        </div>
        <div className="w-[80%]">
          <div>
            <ul className="flex justify-end gap-[40px] font-DM font-normal text-[14px] text-[#767675]">
              <li className="hover:text-[#262626] hover:font-bold ">Home</li>
              <li className="hover:text-[#262626] hover:font-bold">Shop</li>
              <li className="hover:text-[#262626] hover:font-bold">About</li>
              <li className="hover:text-[#262626] hover:font-bold">Contacts</li>
              <li className="hover:text-[#262626] hover:font-bold">Journal</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
