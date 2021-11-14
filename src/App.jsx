import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Classes from "./components/Classes";
import ClassPage from "./pages/ClassPage";
import ClassesTable from "./components/ClassesTable";
import ClassWiseStudentPage from "./pages/ClassWiseStudentPage";
import FacultyPage from "./pages/FacultyPage";
import ClassList from "./components/ClassList";
const App = () => {
  return (
    <Router>
      <div>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/faculty" component={FacultyPage}></Route>
          <Route exact path="/class" component={ClassPage}></Route>
          <Route exact path="/classWiseStudent" component={ClassWiseStudentPage}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
