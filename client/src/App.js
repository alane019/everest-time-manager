import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import ProjectManager from "./components/ProjectManager";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <LogIn />
          </Route>
          <Route exact path={["/home"]}>
            <ProjectManager />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
