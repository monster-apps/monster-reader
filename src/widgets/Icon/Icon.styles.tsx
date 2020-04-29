import { styled } from "themes"
import { Theme } from "themes"

export const I = styled.i<{
  size: keyof Theme["fontSizes"]
  color: keyof Theme["colors"]
}>`
  font-family: "icon";
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  text-decoration: inherit;
  font-size: ${p => p.theme.fontSizes[p.size]};
  color: ${p => p.theme.colors[p.color]};
  text-align: center;
  font-variant: normal;
  text-transform: none;

  &.icon-logo:before {
    content: "\uE801";
  }

  &.icon-book:before {
    content: "\uE802";
  }

  &.icon-translate:before {
    content: "\uE803";
  }

  &.icon-plus:before {
    content: "\uE804";
  }

  &.icon-left:before {
    content: "\uE805";
  }

  &.icon-right:before {
    content: "\uE806";
  }

  &.icon-list:before {
    content: "\uE807";
  }

  &.icon-config:before {
    content: "\uE808";
  }

  &.icon-cancel:before {
    content: "\uE809";
  }
`
