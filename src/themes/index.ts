import baseStyled, { ThemedStyledInterface } from "styled-components"

import { defaultTheme } from "./default"

export interface Theme {
  breakpoints: { [key in keyof typeof defaultTheme.breakpoints]: number }
  fontSizes: { [key in keyof typeof defaultTheme.fontSizes]: string }
  spaces: { [key in keyof typeof defaultTheme.spaces]: string }
  colors: { [key in keyof typeof defaultTheme.colors]: string }
  transitions: { [key in keyof typeof defaultTheme.transitions]: string }
  devices: { [key in keyof typeof defaultTheme.device]: string }
}

export const themes = {
  default: defaultTheme
}
export const styled = baseStyled as ThemedStyledInterface<Theme>

export * from "./GlobalStyles"
