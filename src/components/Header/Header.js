import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css'

const Header = () => {
  return (
    <div className="d-flex justify-content-between container align-items-center">
      <Link to={"/"} className="text-decoration-none text-danger">
        <h2 className="fw-bold">AMAR LAPTOP</h2>
      </Link>
      <nav className="d-flex">
        <CustomLink to={"/"}>Home</CustomLink>
        <CustomLink to={"/review"}>Review</CustomLink>
        <CustomLink to={"/dashboard"}>Dashboard</CustomLink>
        <CustomLink to={"/blogs"}>Blogs</CustomLink>
        <CustomLink to={"/about"}>About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
