import React from 'react'
import { Routes,Route } from "react-router-dom";
import AdminDashboard from '../Pages/Protected/Admin/AdminDashboard';

const AdminRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/admin' element={<AdminDashboard/>}/>
        </Routes>
    </>
  )
}

export default AdminRoutes