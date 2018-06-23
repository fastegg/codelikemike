import createHistory from "history/createBrowserHistory";

export const history = createHistory();

export function go(path: string, state?: any) {
  history.push(path, state);
}

export function back() {
  history.goBack();
}

