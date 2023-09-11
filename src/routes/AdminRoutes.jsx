import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../Pages/Protected/Admin/AdminDashboard";
import AdminIndex from "../Pages/Protected/Admin/AdminIndex";
import AdminProfile from "../Pages/Protected/Admin/AdminProfile";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AdminIndex />} />
        {/* <Route path='/Admin1' element={<AdminDashboard/>}/>
             <Route path='/Changeprofile' element={<AdminProfile/>}/> */}
      </Routes>
    </>
  );
};

export default AdminRoutes;
