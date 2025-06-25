import React from "react";
import Container from "../Container/Container";
import ad1 from "../../assets/Ad_1.png";
import ad2 from "../../assets/Ad_2.png";
import ad3 from "../../assets/Ad_3.png";

const Advertise = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between">
          <div>
            <img src={ad1} alt="" />
          </div>
          <div className="flex justify-between">
            <div>
              <div className="">
                <img src={ad2} alt="" />
              </div>
              <div className="w-full mt-[40px]">
                <img src={ad3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Advertise;
