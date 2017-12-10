import * as Rx from "rxjs";
import { Subject } from "rxjs";
import { createActions } from "./state";

// Actions
const actions: Subject<{}> = createActions(["log"]);

// State
const initialState = 0;

// Reducer
const footerReducer = Rx.Observable.of( () => initialState)
  .merge(
    actions.log.map((payload) => (state) => console.log(state)),
  );

export default footerReducer;
