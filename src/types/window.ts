import { History } from "history"

declare global {
  // tslint:disable-next-line: interface-name
  interface Window {
    browserHistory: History
  }
}
