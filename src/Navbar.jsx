import React from "react";
import { Link } from "react-router-dom";
import CLink from "./CLink";

const Navbar = () => {
  return (
    <header>
      <CLink class="navlink" to="/works">
        WORKS
      </CLink>
      <CLink to="/" id="title">
        <i>anton martynov</i>
      </CLink>
      <CLink class="navlink" to="/profile">
        PROFILE
      </CLink>
    </header>
  );
};

export default Navbar;
