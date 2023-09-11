import React from "react";
import AdminDashboard from "./AdminDashboard";
import AdminProfile from "./AdminProfile";
import { Route, Routes } from "react-router-dom";

const AdminIndex = () => {
  return (
    <>
      <Routes>
        <Route path="Admin1" element={<AdminDashboard />} />
        <Route path="Changeprofile" element={<AdminProfile />} />
      </Routes>
    </>
  );
};

export default AdminIndex;
