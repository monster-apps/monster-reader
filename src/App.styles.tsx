import styled from "styled-components" // FixMe: use styled from theme

 // FixMe: use bg and color from theme
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #171717;
  color: #C6C6C6;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  text-align: justify;
`

export const Container = styled.div`
  width: 600px;
  cursor: default;
  z-index: 1;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
`


export const Highlight = styled.span<{selected?: boolean}>`
  position:relative;
  display: inline-block;
  margin: 15px 0;
  padding: 6px 2px 2px 2px;

  &[data-translation]:before {
    content: attr(data-translation);
    position: absolute;
    top: -10px;
    left: 0;
    font-size: 12px;
    color: #6F6F6F;

  }

  ${p => !p.selected && `color: #C6C6C6;`}
  ${p => p.selected && `color: #FF6800;`}

  &:hover {
    cursor: pointer;

    &:after {
      opacity: 1 !important;
      border-color: #FF6800;
    }
  }

  &:after {
    content: ' ';
    background-color: #242225;
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    z-index: -1;
    ${p => !p.selected && `
      color: #C6C6C6;
      border: 1px solid #58555B;
      opacity: 0 !important;
    `}
    ${p => p.selected && `
      color: #FF6800;
      border: 1px solid #58555B;
      opacity: 1 !important;
    `}
  }

`
