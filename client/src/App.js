import React from "react";
import SuccessRegister from "./components/register/success.register.js";
import Register from "./components/register/register.js";
import Pcparts from "./components/pcparts/pcparts.js";
import Footer from "./components/footer/footer.js";
import Profile from "./components/profile/profile";
import NavBar from "./components/navbar/navbar.js";
import About from "./components/about/about.js";
import Login from "./components/login/login.js";
import Home from "./components/home/home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <NavBar />
          <About />
        </Route>
        <Route path="/pc">
          <NavBar />
          <Pcparts />
        </Route>
        <Route path="/success_register">
          <NavBar />
          <SuccessRegister />
        </Route>
        <Route path="/register">
          <NavBar />
          <Register />
        </Route>
        <Route path="/login">
          <NavBar />
          <Login />
        </Route>
        <Route path="/profile">
          <NavBar />
          <Profile />
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
