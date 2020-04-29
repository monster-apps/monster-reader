import React from "react"
import { ThemeProvider } from "styled-components"
import { Router as RouterProvider } from "react-router-dom"

import { Routes } from "./Routes"
import { themes } from "./themes"
import { GlobalStyle } from "themes"
import { history } from "helpers"

const Providers = () => (
  <ThemeProvider theme={themes.default}>
    <RouterProvider history={history}>
      <GlobalStyle />
      <Routes />
    </RouterProvider>
  </ThemeProvider>
)

export { Providers }
