import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/icons/logo.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import order from "../../assets/icons/cart.svg";
import seller from "../../assets/icons/seller.svg";
import product from "../../assets/icons/product.svg";
import eko from "../../assets/img/sidebar/eko.svg";
import logo from "../../assets/img/sidebar/logo.svg";

const Sidebar = () => {
  const location = useLocation();

  // useEffect(() => {
  //   console.log(location?.pathname)
  // }, [location])

  return (
    <div
      className={`w-[250px] h-screen poppins fixed left-0 bg-gradient-to-t from-[#82c071] to-[#c1e9b6]  z-[500] `}
    >
      <div className="flex flex-col items-end gap-[7px] w-[35px]  rounded-lg cursor-pointer ml-auto m-5">
        <div className="bg-[#1e1e1e] rounded-lg w-full h-[4px]"></div>
        <div className="bg-[#1e1e1e] rounded-lg w-full h-[4px]"></div>
        <div className="bg-[#1e1e1e] rounded-lg w-full h-[4px]"></div>
      </div>
      <div className="w-full flex justify-center items-center mb-8 ">
        <img src={logo} alt="" className="w-[90%]  max-w-[150px]" />
      </div>

      <div className="w-full flex flex-col justify-center items-center px-4">
        <div className="flex flex-col items-center w-full">
          {/* <Link  to='/' className={`flex w-full gap-3 hover:bg-[#eeeeee] px-4 py-[5px] active:scale-[0.95] rounded-[8px] justify-start items-center my-2`}>
                            <img src={dashboard} className='w-[20px]' alt="" />
                            <p>Dashboard</p>
                        </Link> */}
          <Link
            to="/orders"
            className={`flex w-full gap-3 hover:bg-[#eeeeeea9]  ${
              location?.pathname === "/orders" ? "bg-[#eeeeeea9]" : ""
            } p-3 active:scale-[0.95] rounded-[8px] justify-start items-center my-2`}
          >
            <img src={order} className="w-[18px]" alt="" />
            <p>Orders</p>
          </Link>
          <Link
            to="/buyers"
            className={`flex w-full gap-3 hover:bg-[#eeeeeea9]  ${
              location?.pathname === "/buyers" ? "bg-[#eeeeeea9]" : ""
            } p-3 active:scale-[0.95] rounded-[8px] justify-start items-center my-2`}
          >
            <img src={seller} className="w-[18px]" alt="" />
            <p>Buyers</p>
          </Link>
          <Link
            to="/products"
            className={`flex w-full gap-3 hover:bg-[#eeeeeea9]  ${
              location?.pathname === "/products" ? "bg-[#eeeeeea9]" : ""
            } p-3 active:scale-[0.95] rounded-[8px] justify-start items-center my-2`}
          >
            <img src={product} className="w-[17px]" alt="" />
            <p>Products</p>
          </Link>
        </div>
      </div>

      <div className="w-full absolute bottom-0 flex justify-center items-center gap-2 pb-4">
        <h1 className="text-[12px] text-gray-800 italic mr-2">Powered by</h1>
        <span className="">
          <img src={eko} className="w-[50px]" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
