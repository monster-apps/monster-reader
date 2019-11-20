import React from "react"
import { render } from "@testing-library/react"
import { Reader } from "./Reader"

test("renders learn react link", () => {
  const { getByText } = render(<Reader />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
