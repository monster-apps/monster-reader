import React from "react"

import { ButtonStyled, Variant } from "./Button.styles"

interface Button extends React.HTMLAttributes<HTMLElement> {
  content: React.ReactNode
  variant?: Variant
}
const Button = ({ variant = "default", content, ...props }: Button) => (
  <ButtonStyled variant={variant} {...props}>
    {content}
  </ButtonStyled>
)

export { Button }
