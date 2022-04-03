import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Link to={"/"} className="text-decoration-none text-danger">
            <h2 className="text-md-start fw-bold">AMAR LAPTOP</h2>
          </Link>
        </div>
        <nav className="d-flex col-md-6 justify-content-md-end">
          <CustomLink to={"/"}>Home</CustomLink>
          <CustomLink to={"/review"}>Review</CustomLink>
          <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
          <CustomLink to={"/blogs"}>Blogs</CustomLink>
          <CustomLink to={"/about"}>About</CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
