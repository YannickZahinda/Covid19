import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../search/searchBar";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="links">
        <li className="title">
          Covid<span className="evolution">Evolution &nbsp;&nbsp;</span>
          <span><SearchBar/></span>
        </li>
        <li className="link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="link">
          <NavLink to="/Info">Info</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
