import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div>
      <ul className="links">
        <li className="title">
          Covid
          <span className="evolution">Evolution &nbsp;&nbsp;</span>
          <span />
        </li>
        <li className="link">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
