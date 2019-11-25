import React, { useEffect, useState } from "react"
import { findIndex } from "lodash"
import shortid from "shortid"

import { read, selections } from "./api"
import { Container, Highlight, Wrapper } from "./Reader.styles"
import { textToArray } from "../helpers"
import { useMountEffect, useBook } from "../hooks"

const Reader = () => {
  const { getRead } = useBook()
  const [words, setWords] = useState<string[]>()
  useMountEffect(() => getRead.send(1, 1))

  useEffect(() => {
    const textSplitted = textToArray(getRead.data?.text ?? "")
    setWords(textSplitted)
  }, [getRead.data])

  let index: { [key: string]: number } = {}

  const isSelected = (text: string) => selections.includes(text)

  const isTranslated = (text: string) => {
    // find item in read selecions
    const textPositionInApiArray = findIndex(read.selections, ["label", text])
    if (textPositionInApiArray === -1) return
    index[text] = index[text] >= 0 ? index[text] + 1 : 0
    const translatedIndexes = read.selections[textPositionInApiArray].index
    if (translatedIndexes?.includes(index[text]))
      return read.selections[textPositionInApiArray].translation
  }

  const handleClick = (e: any) => {
    // const newArray = xor(selected,[e.currentTarget.textContent])
    // setSelected(newArray)
  }

  if (!words) {
    return <div>loading...</div>
  }

  return (
    <Wrapper>
      <Container>
        {words.map(word =>
          word ? (
            <Highlight
              key={shortid.generate()}
              selected={isSelected(word)}
              onClick={handleClick}
              data-translation={isSelected(word) ? isTranslated(word) : ""}
            >
              {word}
            </Highlight>
          ) : (
            word
          )
        )}
      </Container>
    </Wrapper>
  )
}

export { Reader }
