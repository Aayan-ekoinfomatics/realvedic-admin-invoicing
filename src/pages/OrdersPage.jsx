import React, { useState } from "react";
import order_data from "../mockApi/orderPageApi";
import search from "../assets/icons/search.png";
import ReactPaginate from "react-paginate";
import moment from "moment";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

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
          <div className=" rounded-[15px]   overflow-x-scroll  ">
            <div className="min-w-[1300px]">
              <div className="w-full grid grid-cols-9 text-gray-500 text-[14px] font-[500]  rounded-t-[15px] pr-2 border-b py-2 gap-2 ">
                {order_data?.titles?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-full 
                      `}
                    >
                      <h1
                        className={` ${
                          data === "Actions" ? "mx-auto" : ""
                        }  w-max text-center`}
                      >
                        {data}
                      </h1>
                    </div>
                  );
                })}
              </div>
              <div className="w-full  rounded-b-[15px]  text-[13px] text-[#464646] h-[65vh] overflow-y-scroll ">
                {order_data?.content
                  ?.filter((filterValue) => {
                    if (searchData === "") {
                      return filterValue;
                    } else if (
                      filterValue?.buyer
                        ?.toLowerCase()
                        ?.includes(searchData?.toLowerCase()) ||
                      filterValue?.order_id
                        ?.toLowerCase()
                        ?.includes(searchData?.toLowerCase()) ||
                      filterValue?.destination_state
                        ?.toLowerCase()
                        ?.includes(searchData?.toLowerCase()) ||
                      filterValue?.status
                        ?.toLowerCase()
                        ?.includes(searchData?.toLowerCase())
                    ) {
                      return filterValue;
                    }
                  })
                  .map((data, i) => (
                    <div
                      className="grid grid-cols-9 gap-2 border-b border-b-[#e6e6e69f] py-5 text-black text-sm "
                      key={i}
                    >
                      <div className="w-full flex items-center ">
                        <p className="text-blue-600 cursor-pointer">
                          #{data?.order_id}
                        </p>
                      </div>
                      <div className="w-full ">
                        <p className=" flex flex-col justify-center">
                          <span>
                            {moment.unix(data?.created).format("DD MMM YYYY  ")}
                          </span>
                          <span className="text-xs text-gray-500">
                            {moment.unix(data?.created).format(" hh:mm A")}
                          </span>
                        </p>
                      </div>
                      <div className="w-full ">
                        <p className=" flex flex-col justify-center">
                          <span className="truncate">{data?.buyer?.name}</span>
                          <span className="text-xs text-gray-500 truncate">
                            {data?.buyer?.email}
                          </span>
                        </p>
                      </div>
                      <div className="w-full flex items-center ">
                        <p className="">{data?.items?.length}</p>
                      </div>
                      <div className="w-full flex items-center">
                        <p className="">{data?.destination_state}</p>
                      </div>
                      {/* <div className="w-full flex items-center">
                        <p className="">₹ {data?.sub_total}</p>
                      </div>
                      <div className="w-full flex items-center">
                        <p className="">₹ {data?.tax}</p>
                      </div> */}
                      <div className="w-full flex items-center">
                        <p className="">₹ {data?.grand_total}</p>
                      </div>
                      <div className="w-full flex gap-5 items-center ">
                        {data?.status === "Booked" && (
                          <p className="bg-[#e99f15] rounded-full w-[8px] aspect-square"></p>
                        )}
                        {data?.status === "Paid" && (
                          <p className="bg-[#00ac69] rounded-full w-[8px] aspect-square"></p>
                        )}
                        {data?.status === "Cancelled" && (
                          <p className="bg-[#FF0000] rounded-full w-[8px] aspect-square"></p>
                        )}
                        <p className="">{data?.status}</p>
                      </div>
                      <div className="w-full flex gap-2 items-center ">
                        {data?.delivery_status === "Dispatched" && (
                          <p className=" bg-opacity-5 p-2 w-full text-center bg-[white]  text-[#303030] rounded-lg  border">
                            {data?.delivery_status}
                          </p>
                        )}
                        {data?.delivery_status === "Delivered" && (
                          <p className=" bg-opacity-5 p-2 w-full text-center bg-[white] text-[#00ac69] rounded-lg border ">
                            {data?.delivery_status}
                          </p>
                        )}
                        {data?.delivery_status === "Cancelled" && (
                          <p className=" bg-opacity-5 p-2 w-full text-center bg-[white] text-[#FF0000] rounded-lg border ">
                            {data?.delivery_status}
                          </p>
                        )}
                        {data?.delivery_status === "Returned" && (
                          <p className=" bg-opacity-5 p-2 w-full text-center bg-[white] text-[#e99f15] rounded-lg border ">
                            {data?.delivery_status}
                          </p>
                        )}
                      </div>
                      <div className="flex cursor-pointer  justify-center items-center px-2">
                        <div className=" w-fit ">
                          <KeyboardArrowDownRoundedIcon />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
