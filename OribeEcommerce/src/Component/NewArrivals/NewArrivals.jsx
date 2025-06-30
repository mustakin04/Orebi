import React from "react";
import Container from "../Container/Container";
import Product from "../Product/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SampleNetArrow from "../SampleNetArrow/SampleNetArrow";

const NewArrivals = ({ tittle }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <SampleNetArrow />,
  };
  return (
    <Container className="my-[48px]">
      <div className="font-DM font-bold text-[39px] text-[#262636] ">
        {tittle}
      </div>
      <div className="  mt-[20px]">
        <Slider {...settings}>
          <Product badge={false}></Product>
          <Product badge={true}></Product>
          <Product badge={false}></Product>
          <Product badge={true}></Product>
        </Slider>
      </div>
    </Container>
  );
};

export default NewArrivals;
