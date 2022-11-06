import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import Form from "../Form/Form";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <img src={logo} />
      {/* <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}

      <Form />
    </nav>
  );
};

export default Navbar;
