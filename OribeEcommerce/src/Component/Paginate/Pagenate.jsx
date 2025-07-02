import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../Product/Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 10,
];

const Items = ({ currentItems }) => {
  // console.log(currentItems, "13");
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item} className="w-[32%]">
            <Product badge={true}></Product>
          </div>
        ))}
    </>
  );
};

const Pagenate = ({ itemsPerPage }) => {
  // const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const [eventSelected, setEvenSelected] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setEvenSelected(event.selected);
  };

  return (
    <div className="">
      <div className="flex flex-wrap justify-between ">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex justify-between mt-[30px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          containerClassName="flex gap-3"
          activeClassName="active"
          pageClassName="border-[2px] border-black hover:bg-black hover:text-white"
          pageLinkClassName=" inline-block py-[5px] px-[8px]"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          marginPagesDisplayed={2}
          renderOnZeroPageCount={null}
        />
        <div className="font-DM font-normal text-[14px] text-[#767676]">
          <p>
            Products form {eventSelected + 1} to {itemOffset + itemsPerPage} of{" "}
            {items.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagenate;
