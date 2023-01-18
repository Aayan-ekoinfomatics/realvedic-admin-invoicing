import React, { useEffect, useState } from "react";
import product_data from "../mockApi/productPageApi";
import search from "../assets/icons/search.png";
import ReactPaginate from "react-paginate";

const ProductsPage = () => {
  const [searchData, setSearchData] = useState("");
  const [filterValue, setFilteredValue] = useState();

  // const [pageNumber, setPageNumber] = useState(0);
  // const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;

  // const displayUsers = product_data?.products?.slice(pagesVisited, pagesVisited + usersPerPage)

  // const pageCount = Math.ceil(product_data?.products?.length / usersPerPage);

  // const changePage = ({ selected }) => {
  //     setPageNumber(selected)
  // }

  return (
    <div className="w-full">
      <div className="w-[95%] mx-auto mt-10 ">
        <div className="w-full bg-white rounded-[15px] py-5 px-4 shadow-md">
          <div className="w-full  border-b flex justify-start items-center px-4 my-4">
            <span className="">
              <img src={search} className="w-[15px]" />
            </span>
            <input
              type="text"
              className="w-full px-3 py-2 outline-none text-[14px]"
              placeholder="Filter Products"
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
          <div className="w-full rounded-[15px] ">
            <div className="w-full grid grid-cols-6 py-1 text-[14px] font-[500]  rounded-t-[15px] px-1">
              <div className="w-full flex justify-center items-center py-2">
                <h1>Sl No.</h1>
              </div>
              <div className="w-full flex justify-center items-center py-2">
                <h1>Product Id</h1>
              </div>
              <div className="w-full flex justify-center items-center py-2">
                <h1>Products</h1>
              </div>
              <div className="w-full flex justify-center items-center py-2">
                <h1>Sellers</h1>
              </div>
              <div className="w-full flex justify-center items-center py-2">
                <h1>Remarks</h1>
              </div>
              <div className="w-full flex justify-center items-center py-2">
                <h1>Action</h1>
              </div>
            </div>
            <div className="w-full  rounded-b-[15px] grid grid-cols-6 text-[13px] text-[#464646] max-h-[530px] overflow-y-scroll pl-1">
              {product_data?.products
                ?.filter((filterValue) => {
                  if (searchData === "") {
                    return filterValue;
                  } else if (
                    filterValue?.product
                      ?.toLowerCase()
                      ?.includes(searchData?.toLowerCase()) ||
                    filterValue?.product_id
                      ?.toLowerCase()
                      ?.includes(searchData?.toLowerCase()) ||
                    filterValue?.seller
                      ?.toLowerCase()
                      ?.includes(searchData?.toLowerCase()) ||
                    filterValue?.remarks
                      ?.toLowerCase()
                      ?.includes(searchData?.toLowerCase())
                  ) {
                    return filterValue;
                  }
                })
                .map((data, i) => (
                  <React.Fragment key={i}>
                    <div className="w-full py-4 flex justify-center border-b  items-center">
                      <p className="">{data?.sl_no}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center border-b  items-center">
                      <p className="">{data?.product_id}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center border-b  items-center">
                      <p className="">{data?.product}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center border-b  items-center">
                      <p className="">{data?.seller}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center border-b  items-center">
                      <p className="">{data?.remarks}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center border-b  items-center gap-6">
                      <div>
                        <img
                          src={data?.edit}
                          className="cursor-pointer w-[15px]"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src={data?.delete}
                          className="cursor-pointer w-[16px]"
                          alt=""
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
            <div className="w-full flex justify-center items-center pt-5 mt-5 text-[13px] border-t">
              {/* <ReactPaginate
                                previousLabel={'<'}
                                className='flex justify-between items-center w-full max-w-[300px]'
                                // previousLabel={<img src={left_arrow} />}
                                nextLabel={'>'}
                                // nextLabel={<img src={right_arrow} />}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={'paginationButtons'}
                                previousLinkClassName={'previousBtn'}
                                nextLinkClassName={'nextBtn'}
                                disabledClassName={'paginationDisabled'}
                                activeClassName={'paginationActive'}
                            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
