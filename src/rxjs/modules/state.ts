import * as React from "react";
import * as Rx from "rxjs";
import { Subject } from "rxjs";

export function createAction (): Subject<{}> {
  return new Rx.Subject();
}

// TODO: create a IAction type model here and type it
export function createActions (actionNames: string[]): void {
  actionNames.reduce( (action, name) => ( {...action, [name]: createAction()}), {} );
}

export function createState (reducer$, initialState$ = Rx.Observable.of({})) {
  return initialState$
    .merge(reducer$)
    .scan( (state, [scope, reducer]) =>
      ({...state, [scope]: reducer(state[scope]) }))
    .publishReplay(1)
    .refCount();
}

export interface IConnectProps {
  state$: object;
}

// TODO: fix connect () to work with typings
// export function connect (selector = (state) => (state, actionSubjects) => {
//   // const actions = Object.keys(actions)
//   //   .reduce( (action, key) => ( {...action, [key]: (value) => actionSubjects[key].next(value) }), {});

//   return function wrapWithConnect (WrappedComponent: React.ReactNode) {
//     return class Connect extends React.Component<IConnectProps> {
//       public componentWillMount () {
//         this.subscription = this.context.state$.map(selector).subscribe(::this.setState);
//       }

//       public componentWillUnmount () {
//         this.subscription.unsubscribe();
//       }

//       public render () {
//         return (
//           <WrappedComponent {...this.state} {...this.props} {...actions}/>
//         );
//       }
//     };
//   }
// }

export interface IProviderProps {
  state$: object;
}

export class Provider extends React.Component<IProviderProps> {
  public getChildContext () {
    return { state$: this.props.state$ };
  }

  public render () {
    return this.props.children;
  }
}
