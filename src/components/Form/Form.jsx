import React, { useState } from "react";
import classes from "./Form.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Clicked!!");
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <form onSubmit={searchSubmitHandler} className={classes.form}>
      <input
        type="text"
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder="Search for a github username"
      />
      <NavLink className={classes.btn} type="submit" to="/repos">
        <BiSearchAlt2 />
      </NavLink>
    </form>
  );
};

export default Form;
