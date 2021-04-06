import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

import Home from "./component/home";

//import Card from "./component/Card.js";

//render your react applicatiSon
ReactDOM.render(<Home />, document.querySelector("#app"));
