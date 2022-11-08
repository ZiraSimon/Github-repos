import React from "react";
import { BsCodeSlash, BsFillStarFill } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import classes from "./Repository.module.css";

const Repository = ({ title, desc, language, stars, forks, key }) => {
  return (
    <div className={classes.repository} key={key}>
      <h4>{title}</h4>
      <p>This repo was created by Zira on {desc}</p>
      <div>
        <div className={classes.lang}>
          <BsCodeSlash />
          <p>{language}</p>
        </div>
        <div className={classes.star}>
          <BsFillStarFill />
          <p>{stars}</p>
        </div>
        <div className={classes.fork}>
          <BiGitRepoForked />
          <p>{forks}</p>
        </div>
      </div>
    </div>
  );
};

export default Repository;
