import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/icons/logo.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import invoice_icon_inactive from "../../assets/img/sidebar/invoice_icon_inactive.svg";
import invoice_icon_active from "../../assets/img/sidebar/invoice_icon_active.svg";
import buyer_icon_active from "../../assets/img/sidebar/buyer_icon_active.svg";
import buyer_icon_inactive from "../../assets/img/sidebar/buyer_icon_inactive.svg";
import products_icon_inactive from "../../assets/img/sidebar/products_icon_inactive.svg";
import products_icon_active from "../../assets/img/sidebar/products_icon_active.svg";
import order_icon_inactive from "../../assets/img/sidebar/order_icon_inactive.svg";
import order_icon_active from "../../assets/img/sidebar/order_icon_active.svg";
import product from "../../assets/icons/product.svg";
import eko from "../../assets/img/sidebar/eko.svg";
import logo from "../../assets/img/sidebar/logo.svg";
import logo_sm from "../../assets/img/sidebar/logo_sm.svg";

const Sidebar = () => {
  const location = useLocation();

  // useEffect(() => {
  //   console.log(location?.pathname)
  // }, [location])

  return (
    <div
      className={` 2xl:w-[250px] h-screen poppins fixed left-0 bg-[#227638]  z-[500] flex justify-between flex-col  pt-5`}
    >
      {/* <div className="flex flex-col items-end gap-[7px] w-[35px]  rounded-lg cursor-pointer ml-auto m-5">
        <div className="bg-[#1e1e1e] rounded-lg w-full h-[4px]"></div>
        <div className="bg-[#1e1e1e] rounded-lg w-full h-[4px]"></div>
        <div className="bg-[#1e1e1e] rounded-lg w-full h-[4px]"></div>
      </div> */}
      <div className="flex-1 w-full flex justify-center items-start max-h-[100px]  ">
        <img
          src={logo}
          alt=""
          className="w-[90%]  max-w-[150px] hidden 2xl:block"
        />
        <img
          src={logo_sm}
          alt=""
          className="w-[70%]  max-w-[150px]  2xl:hidden"
        />
      </div>

      <div className=" flex-1 w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-full">
          {/* <Link  to='/' className={`flex w-full gap-3 hover:bg-[#eeeeee] px-4 py-[5px] active:scale-[0.95]  justify-start items-center my-2`}>
                            <img src={dashboard} className='w-[20px]' alt="" />
                            <p>Dashboard</p>
                        </Link> */}
          <Link
            to="/invoices"
            className={`relative flex w-full gap-3   ${
              location?.pathname === "/invoices"
                ? "text-[#164E21] bg-[#FBFFF4]"
                : "text-white"
            } p-6 justify-start items-center `}
          >
            <img
              src={
                location?.pathname === "/invoices"
                  ? invoice_icon_active
                  : invoice_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Invoices</p>

            {/* before and after */}
            {location?.pathname === "/invoices" && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>

          <Link
            to="/buyers"
            className={`relative flex w-full gap-3   ${
              location?.pathname === "/buyers"
                ? "text-[#164E21] bg-[#FBFFF4]"
                : "text-white"
            } p-6    justify-start items-center `}
          >
            <img
              src={
                location?.pathname === "/buyers"
                  ? buyer_icon_active
                  : buyer_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Buyers</p>

            {/* before and after */}
            {location?.pathname === "/buyers" && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>

          <Link
            to="/products"
            className={`relative flex w-full gap-3   ${
              location?.pathname === "/products"
                ? "text-[#164E21] bg-[#FBFFF4]"
                : "text-white"
            } p-6    justify-start items-center `}
          >
            <img
              src={
                location?.pathname === "/products"
                  ? products_icon_active
                  : products_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Products</p>

            {/* before and after */}
            {location?.pathname === "/products" && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>

          <Link
            to="/orders"
            className={`relative flex w-full gap-3   ${
              location?.pathname === "/orders"
                ? "text-[#164E21] bg-[#FBFFF4]"
                : "text-white"
            } p-6    justify-start items-center `}
          >
            <img
              src={
                location?.pathname === "/orders"
                  ? order_icon_active
                  : order_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Orders</p>

            {/* before and after */}
            {location?.pathname === "/orders" && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>
        </div>
      </div>

      <div className="flex-1"></div>

      <div className="w-full absolute bottom-0 flex justify-center items-center gap-2 pb-4">
        <h1 className="text-[12px] text-gray-800 italic mr-2">Powered by</h1>
        <span className="">
          <img src={eko} className="w-[25px]" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
