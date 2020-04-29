import { styled } from "themes"

export const Container = styled.div<{ column?: boolean }>`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: ${p => (p.column ? "column" : "row")};
`
