import styled from "styled-components" // FixMe: use styled from theme

// FixMe: use bg and color from theme
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #c6c6c6;
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
