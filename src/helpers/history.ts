import { createBrowserHistory } from "history"

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
})

// To let available to cypress
if (process.env.NODE_ENV !== "production") {
  window.browserHistory = history
}

export { history }
