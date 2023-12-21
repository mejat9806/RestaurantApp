/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { useState } from "react";
import Footer from "./Footer";

function Applayout() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen min-w-fit">
      <Navbar />

      <main className="sm:w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout;
