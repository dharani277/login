import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li style={{ color: "white" }}>
              <Link style={{ color: "white" }} to="/Login">
                Login
              </Link>
            </li>
            <li style={{ color: "white" }}>
              <Link style={{ color: "white" }} to="/Register">
                Register
              </Link>
            </li>
            <li style={{ color: "white" }}>
              <Link style={{ color: "white" }} to="/Home">
                Home
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register}></Route>
          <Route path="/Home" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
