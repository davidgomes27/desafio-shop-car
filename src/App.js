import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./Components/HomePage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Home />
      </div>
    );
  }
}
