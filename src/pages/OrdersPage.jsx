import React, { useState } from "react";
import order_data from "../mockApi/orderPageApi";
import search from "../assets/icons/search.png";
import ReactPaginate from "react-paginate";

const OrdersPage = () => {
  const [searchData, setSearchData] = useState("");
  const [filterValue, setFilteredValue] = useState();

  // const [pageNumber, setPageNumber] = useState(0);
  // const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;

  // const displayUsers = order_data?.orders?.slice(pagesVisited, pagesVisited + usersPerPage)

  // const pageCount = Math.ceil(order_data?.orders?.length / usersPerPage);

  // const changePage = ({ selected }) => {
  //     setPageNumber(selected)
  // }

  return (
    <div className="w-full">
      <div className="w-[95%] mx-auto mt-10">
        <div className="w-full bg-white rounded-[15px] py-5 px-4 shadow-md">
          <div className="flex justify-between items-center gap-5">
            {/* search */}
            <div className="w-full bg-gray-100 flex justify-start items-center px-4 my-4 rounded-md">
              <span className="">
                <img src={search} className="w-[15px]" />
              </span>
              <input
                type="text"
                className="w-full p-3 outline-none text-[14px] bg-gray-100"
                placeholder="Search Orders"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </div>
            {/* filter and add  */}
            <div className="flex justify-end items-center gap-5 text-sm">
              <button className=" active:scale-95 transition-all w-full text-center rounded-md bg-green-100 p-3">
                Filter
              </button>
              <button className=" active:scale-95 transition-all w-full text-center rounded-md bg-green-100 p-3">
                <h1 className="w-max"> + Create Order</h1>
              </button>
            </div>
          </div>
          <div className="w-full rounded-[15px] ">
            <div className="w-full grid grid-cols-6 py-1 text-[14px] font-[500]  rounded-t-[15px]">
              <div className="w-full flex justify-center items-center py-2">
                <h1>Sl No.</h1>
              </div>
              <div className="w-full flex justify-center items-center py-2">
                <h1>Order Id</h1>
              </div>
              <div className="w-full flex justify-center items-center py-2">
                <h1>Orders</h1>
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
            <div className="w-full  rounded-b-[15px] grid grid-cols-6 text-[13px] text-[#464646] max-h-[530px] overflow-y-scroll">
              {order_data?.orders
                ?.filter((filterValue) => {
                  if (searchData === "") {
                    return filterValue;
                  } else if (
                    filterValue?.order
                      ?.toLowerCase()
                      ?.includes(searchData?.toLowerCase()) ||
                    filterValue?.order_id
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
                    <div className="w-full py-4 flex justify-center items-center">
                      <p className="">{data?.sl_no}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center items-center">
                      <p className="">{data?.order_id}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center items-center">
                      <p className="">{data?.order}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center items-center">
                      <p className="">{data?.seller}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center items-center">
                      <p className="">{data?.remarks}</p>
                    </div>
                    <div className="w-full py-4 flex justify-center items-center gap-6">
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

export default OrdersPage;
