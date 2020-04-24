export const colors = {
  primary: "#001f4b",
  primaryLight: "#0A4692",
  secondary: "#00B32F",
  secondaryLight: "#01E03B",
  base: "#191D21",
  warning: "#ff0069",
  greyLight: "#EDEDED"
}

export const breakpoints = {
  desktop: 960,
  tablet: 660,
  mobile: 360
}

export const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1.5rem", // 24px
  lg: "1.75rem", // 28px
  xl: "2.75rem" // 44px
}

export const spaces = {
  xs: "0.3rem", // 4.8px
  sm: "0.75rem", // 12px
  md: "1rem", // 16px
  lg: "2rem", // 32px
  xl: "3rem" // 48px
}

export const transitions = {
  regular: "all 0.3s ease"
}

export const device = {
  mobile: `(max-width: ${breakpoints.tablet}px)`,
  tablet: `(max-width: ${breakpoints.desktop}px)`
}

export const defaultTheme = {
  colors,
  breakpoints,
  fontSizes,
  spaces,
  transitions,
  device
}
