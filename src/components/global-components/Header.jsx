import React from "react";
import profile from "../../assets/icons/profile2.svg";
import logout from "../../assets/icons/logout.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="pt-4 flex justify-between items-center w-[95%] mx-auto ">
      <div>
        <h1 className="text-3xl">Products</h1>
        <h1 className="text-gray-500 text-sm mt-2">
          Total products : <span className="ml-1">52</span>
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/login" className="">
          <img
            src={logout}
            className="w-[25px] cursor-pointer active:scale-[0.95]"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
