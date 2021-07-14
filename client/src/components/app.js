import react from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import Register from "./Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <div className="Register">
        <Route path="/register" exact component={Register}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
