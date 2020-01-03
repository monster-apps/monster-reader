import styled from "styled-components" // FixMe: use styled from theme

// fixme get colors from theme
export const Word = styled.span<{ selected?: boolean; translated: boolean }>`
  position: relative;
  display: inline-block;
  margin: 15px 0;
  padding: 6px 2px 2px 2px;

  &[data-translation]:before {
    content: attr(data-translation);
    position: absolute;
    top: -12px;
    left: 0;
    font-size: 14px;
    color: #8a8a8a;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 120%;
    overflow: hidden;
  }

  ${p => !p.selected && `color: #C6C6C6;`}
  ${p => p.selected && `color: #C6C6C6;`}
  ${p => p.translated && `color: #FF6800;`}

  &:hover {
    cursor: pointer;

    &:after {
      opacity: 1 !important;
      border-color: #ff6800;
    }
  }

  &:after {
    content: " ";
    background-color: #242225;
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    z-index: -1;
    ${p =>
      !p.selected &&
      `
      color: #C6C6C6;
      border: 1px solid #58555B;
      opacity: 0 !important;
    `}
    ${p =>
      p.selected &&
      `
      color: #FF6800;
      border: 1px solid #58555B;
      opacity: 1 !important;
    `}
  }
`
