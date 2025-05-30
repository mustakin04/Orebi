import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/Banner.png"


const Banner = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
   <div >
     <Slider {...settings}>
      <div>
        <img src={banner} alt="" />
      </div>
      <div className='bg-yellow-500 h-12 w-full'>
        <h3>2</h3>
      </div>
      <div className='bg-yellow-700 h-12 w-full'>
        <h3>3</h3>
      </div>
      <div >
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
   </div>
  );
  
}

export default Banner