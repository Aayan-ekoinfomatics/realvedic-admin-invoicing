import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./pages/Login";
import logo from "../src/assets/icons/logo.svg";
import OrdersPage from "./pages/OrdersPage";
import Sidebar from "./components/global-components/Sidebar";
import Header from "./components/global-components/Header";
import ProductsPage from "./pages/ProductsPage";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/routing-components/ProtectedRoute";
import BuyersPage from "./pages/BuyersPage";
import { BASE_ADDRESS } from "./base_address/base_address";
import axios from "axios";
import InvoicePage from "./pages/InvoicePage";
import ProductsEditPage from "./pages/ProductsEditPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    const formdata = new FormData();
    formdata?.append("email", "vivek.k@ekoinfomatics.com");
    formdata?.append("password", "12345678");

    // fetch(BASE_ADDRESS + "login", {
    //   method: "POST",
    //   body: formdata,
    // })
    //   .then((response) => {
    //     //handle response
    //     console.log("response", response?.headers?.get("Authorization"));
    //   })
    //   .then((data) => {
    //     //handle data
    //     console.log("data", data);
    //   })
    //   .catch((error) => {
    //     //handle error
    //   });

    axios
      .post(BASE_ADDRESS + "login", formdata)
      ?.then((res) => console.log(res));
  }, []);

  return (
    <div className="cursor-default bg-[#FBFFF4] min-h-[100vh]">
      {/* sidebar */}
      {location?.pathname.includes("/login") ? "" : <Sidebar />}

      <div
        className={
          location?.pathname.includes("/login")
            ? "w-full  poppins"
            : "w-full pl-[60px] 2xl:pl-[250px] poppins"
        }
      >
        {/* {location?.pathname.includes("/login") ? "" : <Header />} */}

        <Routes>
          {/* <Route path='*' element={<Navigate to={localStorage.getItem("status") === 'true' ? '/admin-dashboard' : '/login'} replace={true} />} /> */}
          <Route
            path="/"
            element={<Navigate to={"/invoices"} replace={true} />}
          />

          <Route element={<Login />} path={"/login"} />

          {/* <Route element={<ProtectedRoute />}>
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route element={<ProductsPage />} path={'/products'} />
            <Route element={<OrdersPage />} path={'/orders'} />
          </Route> */}
          {/* <Route path='/admin-dashboard' element={<Dashboard />} /> */}
          <Route element={<InvoicePage />} path={"/invoices"} />
          <Route element={<ProductsPage />} path={"/products"} />
          <Route
            element={<ProductsEditPage />}
            path={"/products/:product_id"}
          />
          <Route element={<BuyersPage />} path={"/buyers"} />
          <Route element={<OrdersPage />} path={"/orders"} />

          {/* <Route element={<Dashboard />} path={'/'} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
