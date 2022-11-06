import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Home.module.css";
import Form from "../../components/Form/Form";

const Home = () => {
  return (
    <section className={classes.home}>
      <Navbar />
      <div className={classes.content}>
        <h2>
          Let's Build the Next Big <br />
          Thing Now
        </h2>
        <p>
          The complete developer area to search <br /> whatever you need on
          github
        </p>
        <Form />
      </div>
    </section>
  );
};

export default Home;
