import React from "react";
import "./App.scss";
import Mainwidget from "./Containers/Parent-widget";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileAlt,
  faCamera,
  faGlobeAfrica
} from "@fortawesome/free-solid-svg-icons";

library.add(faFileAlt, faCamera, faGlobeAfrica);

function App() {
  return (
    <div className="App">
      <Mainwidget />
    </div>
  );
}

export default App;
