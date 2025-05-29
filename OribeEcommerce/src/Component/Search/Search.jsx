import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ className, placeholder,children }) => {
  return (
    <div className="relative">{children}
      <input type="text" className={className} placeholder={placeholder} />
      <FaSearch className="absolute top-[17px] right-[17px] " />
    </div>
  );
};

export default Search;
