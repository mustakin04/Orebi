import React from "react";

const Badge = ({ tittle }) => {
  return (
    <div className="absolute bg-[#262626] top-4 left-3 w-[92px] h-[35px] font-DM text-white 
    font-bold text-center rounded-sm">
      {tittle}
    </div>
  );
};

export default Badge;
