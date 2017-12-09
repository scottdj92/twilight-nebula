import * as React from "react";
import { render } from "react-dom";

const App = () => (
  <div>
    hello world!~
  </div>
);

render(<App/>, document.getElementById("app"));

// if ((module as any).hot) {
//   (module as any).hot.accept();
// }
