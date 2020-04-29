import { styled } from "themes"
import { Theme } from "themes"

export const P = styled.p<{
  margin?: keyof Theme["spaces"]
  size: keyof Theme["fontSizes"]
  color: keyof Theme["colors"]
}>`
  margin: ${p => p.theme.spaces || "0px"};
  font-size: ${p => p.theme.fontSizes[p.size]};
  line-height: ${p => p.theme.fontSizes[p.size]};
`
