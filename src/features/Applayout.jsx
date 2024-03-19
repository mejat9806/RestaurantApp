/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";
function Applayout() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  justify-between">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Applayout;
