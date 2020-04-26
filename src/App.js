import React from "react";
import { Route,BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Gitprojects from "./components/Gitprojects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Route path="/lokesh" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/gitprojects" component={Gitprojects} />
      <Route path="/contacts" component={Contacts} />
    </BrowserRouter>
  );
}


export default App;
