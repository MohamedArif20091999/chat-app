import react from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import Login from "./Login/Login";
import Register from "./Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <div className="Register">
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
