import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import user_icon_inactive from "../../assets/img/sidebar/user_icon_inactive.svg";
import user_icon_active from "../../assets/img/sidebar/user_icon_active.svg";
import product from "../../assets/icons/product.svg";
import eko from "../../assets/img/sidebar/eko.svg";
import logo from "../../assets/img/sidebar/logo.svg";
import logo_sm from "../../assets/img/sidebar/logo_sm.svg";
import logout from '../../assets/icons/logout-square.svg'

const Sidebar = () => {
  const location = useLocation();

  const navigate = useNavigate();

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
            className={`relative flex w-full gap-3   ${location?.pathname?.includes("/invoices")
              ? "text-[#164E21] bg-[#FBFFF4]"
              : "text-white"
              } p-6 justify-start items-center `}
          >
            <img
              src={
                location?.pathname?.includes("/invoices")
                  ? invoice_icon_active
                  : invoice_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Invoices</p>

            {/* before and after */}
            {location?.pathname?.includes("/invoices") && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>

          <Link
            to="/buyers"
            className={`relative flex w-full gap-3   ${location?.pathname?.includes("/buyers")
              ? "text-[#164E21] bg-[#FBFFF4]"
              : "text-white"
              } p-6    justify-start items-center `}
          >
            <img
              src={
                location?.pathname?.includes("/buyers")
                  ? buyer_icon_active
                  : buyer_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Buyers</p>

            {/* before and after */}
            {location?.pathname?.includes("/buyers") && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>

          <Link
            to="/products"
            className={`relative flex w-full gap-3   ${location?.pathname?.includes("/products")
              ? "text-[#164E21] bg-[#FBFFF4]"
              : "text-white"
              } p-6    justify-start items-center `}
          >
            <img
              src={
                location?.pathname?.includes("/products")
                  ? products_icon_active
                  : products_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Products</p>

            {/* before and after */}
            {location?.pathname?.includes("/products") && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>

          <Link
            to="/orders"
            className={`relative flex w-full gap-3   ${location?.pathname?.includes("/orders")
              ? "text-[#164E21] bg-[#FBFFF4]"
              : "text-white"
              } p-6    justify-start items-center `}
          >
            <img
              src={
                location?.pathname?.includes("/orders")
                  ? order_icon_active
                  : order_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Orders</p>

            {/* before and after */}
            {location?.pathname?.includes("/orders") && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>


          <Link
            to="/users"
            className={`relative flex w-full gap-3   ${location?.pathname?.includes("/users")
              ? "text-[#164E21] bg-[#FBFFF4]"
              : "text-white"
              } p-6    justify-start items-center `}
          >
            <img
              src={
                location?.pathname?.includes("/users")
                  ? user_icon_active
                  : user_icon_inactive
              }
              className="w-[25px]"
              alt=""
            />
            <p className="hidden 2xl:block">Users</p>

            {/* before and after */}
            {location?.pathname?.includes("/users") && (
              <>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-br-2xl bg-[#227638] bottom-[calc(100%-10px)]"></div>
                <div className="absolute right-0 transition-all w-[100%] h-[10px] rounded-bl-2xl bg-[#227638] top-[calc(100%-10px)] rotate-180"></div>
              </>
            )}
          </Link>
        </div>
      </div>

      <div className="flex-1"></div>

      <div className="w-full absolute bottom-0 flex flex-col justify-center items-center pb-4 gap-4">
        <div className="w-full flex justify-center items-center gap-2 hover:bg-[#FBFFF4] hover:text-[#227638] text-white py-2 cursor-pointer" onClick={() => {
          localStorage.clear()
          navigate('/login')
        }}>
          <img src={logout} className='w-[18px]' alt="" />
          <h1 className="text-[15px] ">Logout</h1>
        </div>
        {/* <div className=" flex justify-center items-center gap-2 ">
          <h1 className="text-[12px] text-gray-800 italic mr-2">Powered by</h1>
          <span className="">
            <img src={eko} className="w-[25px]" alt="" />
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
