import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import FirstLast from "./components/firstandlast";

import "./styles.css";
import Rancolor from "./components/rancolor";
import Reverser from "./components/reverser";
import ConcatList from "./components/concatli";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="content">
          <div className="App">
            <BrowserRouter>
              <div>
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/firstandlast" component={FirstLast} />
                  <Route path="/rancolor" component={Rancolor} />
                  <Route path="/reverser" component={Reverser} />
                  <Route path="/concatli" component={ConcatList} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
