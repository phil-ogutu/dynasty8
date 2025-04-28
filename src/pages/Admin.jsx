import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


const Admin = ({properties, setProperties}) => {
  return (
    <main className="bg-gray-200 grid gap-4 p-4 grid-cols-[200px,_1fr]">
      <Sidebar />
      <Outlet context={{ properties, setProperties }}/>
    </main>
  );
};

export default Admin;
