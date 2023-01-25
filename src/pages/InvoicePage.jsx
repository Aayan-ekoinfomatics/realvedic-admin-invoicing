import React from "react";

// assets
import invoice_icon_static from "../assets/img/sidebar/invoice_icon_static.svg";
import add_icon from "../assets/img/mainPages/add_icon.svg";
import search_icon from "../assets/img/mainPages/search_icon.svg";

const InvoicePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-[90%] mx-auto pt-5">
        <div className="flex ">
          <img src={invoice_icon_static} alt="" />
          <h1 className="p-5 text-xl font-semibold text-[#464646]">Invoices</h1>
        </div>

        <div>
          <button className="bg-[#164E21] text-white rounded-full flex items-center p-3 px-8 gap-2 active:scale-95 transition-all ">
            <span>Add Order</span>
            <img src={add_icon} alt="" />
          </button>
        </div>
      </div>

      {/* search filters */}
      <div className=" w-[90%] mx-auto mt-5">
        <div className="border-[#7d9383] border-2 rounded-full bg-white flex overflow-hidden px-5">
          <label htmlFor="search_order" className=" p-2  pr-0">
            <img src={search_icon} className="w-[25px] " alt="" />
          </label>
          <input
            type="text"
            id="search_order"
            className="w-full outline-none p-2"
          />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default InvoicePage;
