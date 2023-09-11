import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import AdminRoutes from "./AdminRoutes";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Pagination from "../Components/Pagination/Pagination";


const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Pagination" element={<Pagination />} />
        <Route path="/Admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <AdminRoutes/> */}
      </Routes>
      
    </>
  );
};

export default AppRouting;
