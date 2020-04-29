import React from "react"

import { P } from "./Text.styles"
import { Theme } from "themes"

interface Text {
  color?: keyof Theme["colors"]
  size?: keyof Theme["fontSizes"]
  children: React.ReactNode
  margin?: keyof Theme["spaces"]
}
const Text = ({ margin, size = "md", color = "secondary", children, ...props }: Text) => (
  <P size={size} color={color} {...props}>
    {children}
  </P>
)

export { Text }
