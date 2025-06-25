import React from "react";
import Container from "../Container/Container";

import new2 from "../../assets/new2.png"
import new3 from "../../assets/new3.png"
import new4 from "../../assets/new4.png"
import Product from "../Product/Product";
const NewArrivals = ({ tittle }) => {
  return (
    <Container className="my-[48px]">
      <div className="font-DM font-bold text-[39px] text-[#262636] ">
        {tittle}
      </div>
      <div className="flex justify-between mt-[20px]">
        <Product badge={false}></Product>
        <Product badge={true}></Product>
        <Product badge={false}></Product>
        <Product badge={true}></Product>
      </div>
    </Container>
  );
};

export default NewArrivals;
