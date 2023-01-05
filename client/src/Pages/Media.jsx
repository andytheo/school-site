import React from "react";
import Cultural from "./AllMedia/Cultural";
import Students from "./AllMedia/Students";
import Graduation from "./AllMedia/Graduation";
import AppNavBar from "../components/Navbar/Nav";
import TransparentHeader from "../components/props/TransparentHeader";
import Footer from "../components/home/Footer";

const Media = () => {
  return (
    <>
      <AppNavBar />
      <TransparentHeader text="Pictures" />
      <Students />
      <Graduation />
      <Cultural />
      <Footer />
    </>
  );
};

export default Media;
