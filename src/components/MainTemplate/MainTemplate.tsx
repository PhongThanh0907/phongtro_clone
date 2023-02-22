import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";

const MainTemplate = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainTemplate;
