import Home from "./pages/Home/Home";
import classes from "./App.module.css";
import Repos from "./pages/Repos/Repos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div className={classes.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/repos" element={<Repos />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
