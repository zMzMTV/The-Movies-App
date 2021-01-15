import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Cards from "./components/Cards";
import Movie from "./components/Movie";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faSearch);

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/movie/:id">
            <div style={{ backgroundColor: "#d1eeee" }}>
              <Movie />
            </div>
          </Route>
          <Route path="/">
            <div style={{ backgroundColor: "#d1eeee" }}>
              <div className="container">
                <Cards />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
