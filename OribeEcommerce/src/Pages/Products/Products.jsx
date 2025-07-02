import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../Component/Container/Container";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Breadcrumbs from "../../Component/Breadcrumbs/Breadcrumbs";
import Pagenate from "../../Component/Paginate/Pagenate";
const Products = () => {
  const [show, setShow] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const handleChange = (e) => {
    setShow(e.target.value);
  };
  console.log(show, "17");
  return (
    <div className="py-[70px]">
      <Container>
        <div>
          <Breadcrumbs tittle={path}></Breadcrumbs>
          <div className="flex gap-14">
            <div className="bg-gray-500 w-[25%]  ">shop by Category</div>
            <div className=" w-[75%]">
              <div className="flex justify-end gap-6 mb-[70px]">
                <div className="flex items-center gap-3">
                  <p className="font-DM font-normal text-[16px] text-[#767676]">
                    Sort by:
                  </p>
                  <select
                    id="countries"
                    className="flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-DM font-normal text-[16px] text-[#767676]">
                    Show:
                  </p>
                  <select
                    onChange={(e) => handleChange(e)}
                    id="show"
                    value={show}
                    className="flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="5">5</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="40">40</option>
                  </select>
                </div>
              </div>
              <Pagenate  itemsPerPage={parseInt(show || "12", 10)}></Pagenate>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
