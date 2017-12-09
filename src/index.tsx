import * as React from "react";
import { render } from "react-dom";
import Footer from "./footer/";
import "./index.scss";
declare const module: any;

const App = () => (
  <div>
    hello world!~
    <Footer/>
  </div>
);

render(<App/>, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
