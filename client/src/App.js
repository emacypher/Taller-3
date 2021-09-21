import React from "react";
import SuccessRegister from "./components/register/success.register.js";
import PcArmadas from "./components/pcarmadas/pcarmadas.js";
import Register from "./components/register/register.js";
import Pcparts from "./components/pcparts/pcparts.js";
import Profile from "./components/profile/profile";
import NavBar from "./components/navbar/navbar.js";
import About from "./components/about/about.js";
import Login from "./components/login/login.js";
import Home from "./components/home/home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Noticias from "./components/noticias/noticias.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pc_armadas">
          <PcArmadas />
        </Route>
        <Route path="/about">
          <NavBar />
          <About />
        </Route>
        <Route path="/noticias">
          <NavBar />
          <Noticias />
        </Route>
        <Route path="/armar_pc">
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
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
