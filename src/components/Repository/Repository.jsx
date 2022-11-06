import React from "react";
import { BsCodeSlash, BsFillStarFill } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import classes from "./Repository.module.css";

const Repository = ({ title, desc, language, stars, forks }) => {
  return (
    <div className={classes.repository}>
      <h4>{title}</h4>
      <p>{desc}</p>
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


// import React from "react";
// import { BsCodeSlash, BsFillStarFill } from "react-icons/bs";
// import { BiGitRepoForked } from "react-icons/bi";
// import  classes from "./Repository.module.css";
// // import moment from "moment/moment";
// // import { Link } from "react-router-dom";

// const Repository = ({ title, desc, language, stars, forks }) => {
//   return (
//     <>
//       {repos.map((item) => {
//         <div className={classes.repository}>
//         <h4>{title}</h4>
//         <p>{desc}</p>
//         <div>
//           <div className={classes.lang}>
//             <BsCodeSlash />
//             <p>{language}</p>
//           </div>
//           <div className={classes.star}>
//             <BsFillStarFill />
//             <p>{stars}</p>
//           </div>
//           <div className={classes.fork}>
//             <BiGitRepoForked />
//             <p>{forks}</p>
//           </div>
//         </div>
//       </div>
//       })}
//     </>
//   );
// };

// export default Repository;