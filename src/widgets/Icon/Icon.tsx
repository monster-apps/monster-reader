import React from "react"

import { I } from "./Icon.styles"
import { Theme } from "themes"

interface Icon {
  color?: keyof Theme["colors"]
  size?: keyof Theme["fontSizes"]
  name:
    | "logo"
    | "book"
    | "translate"
    | "plus"
    | "left"
    | "right"
    | "list"
    | "config"
    | "cancel"
}
const Icon = ({ name, size = "md", color = "secondary" }: Icon) => (
  <I className={`icon-${name}`} size={size} color={color} />
)

export { Icon }
