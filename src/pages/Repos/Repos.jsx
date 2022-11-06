import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Repos.module.css";
import img from "../../assets/pic.jpg";
import { MdLocationPin } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import Repository from "../../components/Repository/Repository";

const DUMMY_DATA = [
  {
    id: "r1",
    title: "ATM Simulator",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r2",
    title: "City guide map",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r3",
    title: "Inventory tracker app",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r4",
    title: "Calculator app",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r5",
    title: "Netflix clone",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r6",
    title: "Twitter clone",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r7",
    title: "Youtube clone",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
  {
    id: "r8",
    title: "Audiophile",
    desc: "small description about the project ajkf nakaf ajda ",
    language: "Javascript",
    stars: "3232",
    forks: "213",
  },
];

const Repos = () => {
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
          {DUMMY_DATA.map((data) => (
            <Repository
              key={data.id}
              title={data.title}
              desc={data.desc}
              stars={data.stars}
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



// import React, { useState, useEffect, useMemo } from "react";
// // import { MdLocationPin } from "react-icons/md";
// // import { BsLink45Deg } from "react-icons/bs";
// // import classes from "./Repos.module.css";
// // import Navbar from "../../Components/navbar/Navbar";
// import Card from "../../Components/repository/Repository";
// // import Form from "../../Components/form/Form";
// import axios from "axios";
// import { UsersFooter } from "../../Components/UsersFooter";
// import { getPageNumber } from "../../utils/getPageNumber";
// import { useSearchParams } from "react-router-dom";

// const Repos = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [params] = useSearchParams();
//   const pageNumber = useMemo(() => getPageNumber(params), [params]);

//   const getData = async (page) => {
//     const { data } = await axios.get(
//       `https://api.github.com/users/zirasimon/repos`
//     );
//     console.log(data);
//     if (page > 1 || data.length > 0) {
//       setData((prev) => [...prev, ...data]);
//     } else {
//       setData(data);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     if (!data.length && pageNumber !== 1) {
//       // go to data page if no data
//       window.location.href = "/data";
//     }

//     if (data.length / 4 < pageNumber) {
//       getData(pageNumber);
//     }
//   }, [pageNumber, data.length]);

//   const getCurrentPageData = (pageNumber) => {
//     const startIndex = (pageNumber - 1) * 4;
//     const endIndex = startIndex + 4;
//     return data.slice(startIndex, endIndex);
//   };

//   const currentPageData = getCurrentPageData(pageNumber);
//   const pageDataExists = currentPageData.length > 0;

//   if (!pageDataExists && !isLoading) {
//     return <div className="error">No data found</div>;
//   }

//   if (isLoading) {
//     return (
//       <div className="loading">
//         Please wait, your request is being processed....
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="repos">
//         <Navigation />
//         <div className="repos-content">
//           <h3>zirasimon's Repo-List</h3>
//           <div className="repos-list">
//             <Card repos={getCurrentPageData(pageNumber)} />
//           </div>
//           <UsersFooter pageNumber={pageNumber} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Repos;
