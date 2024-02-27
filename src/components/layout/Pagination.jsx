import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../layout/ProductCard";
import productThree from "../../../public/assets/p10.png";
import Paragraph from "./Paragraph";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className={` sm:w-[49%] lg:w-[32%] mb-3`}>
            <ProductCard
              className="w-full mb-3"
              productImageLink={productThree}
              tag="new"
              tagVisibility={true}
              productName="Basic Crew Neck Tee"
              productPrice="$44.00"
              productColor="black"
            />
          </div>
        ))}
    </>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(5);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex justify-between flex-wrap">
        <Items currentItems={currentItems} className={"kaj-kortace"} />
      </div>
      <div className="mt-10 lg:flex justify-between">
        <ReactPaginate
          onPageChange={handlePageClick}
          containerClassName="flex gap-x-1 sm:gap-x-2 md:gap-x-5"
          activeLinkClassName="!bg-black text-white"
          previousLinkClassName="hidden"
          pageRangeDisplayed={4}
          breakLabel="..."
          breakLinkClassName="px-4"
          marginPagesDisplayed={2}
          nextLinkClassName="hidden"
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          pageLinkClassName="px-2 md:px-4 py-1 md:py-2.5 text-[#767676] border-[1px] border-[#D8D8D8]"
        />
        <Paragraph
          text={`Products from ${itemOffset + 1} to ${endOffset} of ${items.length}`}
          classname={"pt-3 md:pt-5 lg:pt-0 font-dm-sans text-secondary-color"}
        />
      </div>
    </>
  );
}

export default Pagination;
