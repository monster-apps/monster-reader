import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: "Georgia", -apple-system, BlinkMacSystemFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export { GlobalStyle }
