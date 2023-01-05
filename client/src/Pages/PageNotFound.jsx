import React from "react";
import { Link } from "react-router-dom";
import AppNavBar from "../components/Navbar/Nav";
import TransparentHeader from "../components/props/TransparentHeader";
import Footer from "../components/home/Footer";

const PageNotFound = () => {
  return (
    <>
      <AppNavBar />
      <div className="page-not-found">
        <div>404 | Page Not Found</div>
        <p>
          Back to <Link to="/">Home</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
