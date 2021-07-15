import react from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import history from "../history";

import "./app.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <div className="Register">
        <Router history={history}>
          <Route path="/" exact component={Register}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/home" exact component={Home}></Route>
        </Router>
      </div>
    </BrowserRouter>
  );
};

export default App;
