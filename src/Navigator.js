import React from "react";
import { Router} from "@reach/router";
import {Home, Playground, NotFound} from "./Pages/index";
import ScrollToTop from './ScrollToTop'


const Navigator = () => {
  return (
    <Router  primary={false}>
      <ScrollToTop path="/">
      <NotFound default />
      <Home  path="/" />
      <Playground  path="/play" />
      
      </ScrollToTop>
      
    </Router>
  );
};

export default Navigator;
