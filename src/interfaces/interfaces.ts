/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from "redux";

export interface IDispatch<A extends Action<string> > {
  <T extends A>(action: T): T,
  fetchData: (word: string) => void;
}
