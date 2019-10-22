import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Icon, Box } from "./components";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Icon size="48" color="neutral__900">
        accessibility
      </Icon>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
