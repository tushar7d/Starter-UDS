import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Navigator from './Navigator'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <Navigator />
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
