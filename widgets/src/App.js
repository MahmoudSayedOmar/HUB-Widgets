import React from "react";
import "./App.scss";
import Mainwidget from "./Containers/Parent-widget";
import SeeAll from "./Containers/Seeall-Container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Route } from "react-router-dom";


import {
  faFileAlt,
  faCamera,
  faGlobeAfrica
} from "@fortawesome/free-solid-svg-icons";

library.add(faFileAlt, faCamera, faGlobeAfrica);

function App() {
  return (
    <div >
      <Router>
        <Route exact path="/" component={Mainwidget} />
        <Route path="/seeall" component={SeeAll} />
    </Router>
    </div>
    
  );
}

export default App;
