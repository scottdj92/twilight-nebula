import * as React from "react";
import { render } from "react-dom";
import Footer from "./components/footer";
import Galaxy from "./components/galaxy";
import Header from "./components/header";
import "./index.scss";
declare const module: any;

const App = () => (
  <div>
    <Header/>
    <Galaxy/>
    <Footer/>
  </div>
);

render(<App/>, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
