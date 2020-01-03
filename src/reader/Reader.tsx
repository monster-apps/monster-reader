import React from "react"

import { Word } from "./Reader.orm"
import { Highlight } from "../Highlight"

interface Reader {
  words: Word[]
}

const Reader = ({ words }: Reader) => {
  return (
    <>
      {words.map(word =>
        word ? <Highlight key={word.key} id={word.key} {...word} /> : word
      )}
    </>
  )
}

export { Reader }
