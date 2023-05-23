import React from "react";
import "../Layout/Main.css";
import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber/Navber";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
  return (
    <div className="width">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
