import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
};

export default App;
