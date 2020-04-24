export const colors = {
  primary: "#191D21",
  primaryLight: "#1E2227",
  primaryDark: "#0A0B0D",
  secondary: "#C6C6C6",
  secondaryDark: "#8A8A8A",
  secondaryDarker: "#4F4F4F",
  tertiary: "#FF2D49"
}

export const breakpoints = {
  desktop: 960,
  tablet: 660,
  mobile: 360
}

export const fontFamily = {
  primary: "Georgia",
  secondary: "Helvetica"
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
  fontFamily,
  fontSizes,
  spaces,
  transitions,
  device
}
