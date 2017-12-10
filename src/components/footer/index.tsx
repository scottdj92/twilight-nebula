import * as React from "react";
import { Observable } from "rxjs";
import "./index.scss";

class Footer extends React.Component {
  public componentDidMount () {
    Observable.fromEvent(document.getElementById("#button"), "click");
  }
  public render () {
    return (
      <div>
        <h1 className="is-size-5">Developed by EF Go Ahead Tours</h1>
        <button id="button">button</button>
      </div>
    );
  }
}

export default Footer;
