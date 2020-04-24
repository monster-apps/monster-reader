import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as RouterProvider } from "react-router-dom"

import { Routes } from "./Routes"
import { themes } from "./themes"
import { GlobalStyle } from "themes"

const Providers = () => (
  <ThemeProvider theme={themes.default}>
    <RouterProvider basename="/">
      <GlobalStyle />
      <Routes />
    </RouterProvider>
  </ThemeProvider>
)

export { Providers }
