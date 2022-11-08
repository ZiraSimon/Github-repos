import React, {useEffect,useState} from "react";

import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Repos.module.css";
import img from "../../assets/pic.jpg";
import { MdLocationPin } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import Repository from "../../components/Repository/Repository";



const Repos = () => {
  const [repos, setRepos] = useState([])
 
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/ZiraSimon/repos"
      );
      console.log(data);
      setRepos(data)
    };
    getData();
  }, []);
  return (
    <section className={classes.section}>
      <Navbar />
      <div className={classes.card}>
        <div className={classes.profile}>
          <img src={img} alt="Profile pic" />
          <h4>Zira Simon</h4>
          <p>Frontend Developer</p>
          <div className={classes.content}>
            <div>
              <p>Repos</p>
              <p>44</p>
            </div>
            <div>
              <p>Followers</p>
              <p>17</p>
            </div>
            <div>
              <p>Following</p>
              <p>5</p>
            </div>
          </div>
          <div>
            <div className={classes.location}>
              <MdLocationPin />
              <p>Lagos, Nigeria</p>
            </div>
            <div className={classes.link}>
              <BsLink45Deg />
              <p>https://zira-simon.com</p>
            </div>
          </div>
        </div>
        <div className={classes.repo}>
          {repos.map((data) => (
            <Repository
              key={data.id}
              title={data.full_name}
              desc={data.created_at}
              stars={data.stargazers_count}
              forks={data.forks}
              language={data.language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repos;
