import React from "react";
import Navbar from "../component/Nav/Navbar";
import { Outlet } from "react-router";
import Footer from "../component/Nav/Footer/Footer";

const Root = () => {
  return (
    <div className=" container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
