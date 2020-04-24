import { createGlobalStyle } from "styled-components"
import { Theme } from "themes"

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html,
  body,
  body > div {
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.primary}
  }

  body {
    margin: 0;
    font-family: ${p => p.theme.fontFamily.primary}, -apple-system, BlinkMacSystemFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:  ${p => p.theme.colors.secondary}
  }
`

export { GlobalStyle }
