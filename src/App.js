import React, { Component } from "react";
import {  Route } from "react-router-dom";
import ShowInfo from "./Containers/ShowInfo/ShowInfo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => <ShowInfo />} />
      </div>
    );
  }
}

export default App;
