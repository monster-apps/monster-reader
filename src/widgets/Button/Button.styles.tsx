import { styled, Theme } from "themes"

const variant = (theme: Theme) => ({
  default: `
    color: ${theme.colors.quaternary};
    background: ${theme.colors.tertiary};
  `,
  primary: `
    color: ${theme.colors.secondary};
    background: ${theme.colors.primaryLight};
  `,
  basic: `
    color: ${theme.colors.secondary};
    background: transparent;
  `
})

const ButtonStyled = styled.button<{ variant: Variant }>`
  border: 0 none;
  padding: ${p => p.theme.spaces.md};
  font-family: ${p => p.theme.fontFamily.secondary};
  font-size: ${p => p.theme.fontSizes.sm};
  font-weight: bold;
  border-radius: ${p => p.theme.borderRadius.md};
  cursor: pointer;
  :hover {
    filter: brightness(110%);
  }
  :active {
    filter: brightness(90%);
  }
  ${p => variant(p.theme)[p.variant]}
`

export type Variant = keyof ReturnType<typeof variant>
export { ButtonStyled }
