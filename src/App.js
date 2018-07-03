import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import ShowInfo from "./Containers/ShowInfo/ShowInfo";
import css from "./App.css";
import Repos from "./Containers/Repos/Repos";

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <div className={css.HeadingHolder}>
          <h2 className={css.HeadingText}>GitHub info</h2>
          <div className={css.NavBar}>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/repos" exact>Repos</NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/" exact render={() => <ShowInfo />} />
          <Route path="/repos" exact render={() => <Repos />} />
        </Switch>
      </div>
    );
  }
}

export default App;
