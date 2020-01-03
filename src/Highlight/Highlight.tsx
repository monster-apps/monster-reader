import React, { useState, useEffect } from "react"

import { Word } from "./Highlight.styles"
import { Word as WordType } from "../Reader/Reader.orm"
import { useBook } from "../hooks"

interface Highlight extends WordType {
  id: string
}

const Highlight = (props: Highlight) => {
  const [selected, setSelected] = useState(props.selected)
  const [translation, setTranslation] = useState(props.translation)
  const { postSelections } = useBook()

  useEffect(() => {
    setSelected(props.selected)
  }, [props.selected])

  useEffect(() => {
    setTranslation(props.translation)
  }, [props.translation])

  useEffect(() => {
    if (postSelections.data) {
      setSelected(true)
      setTranslation(postSelections.data?.translation)
    }
  }, [postSelections.data])

  const handleClick = (e: any) => {
    const selectedWord = e.currentTarget.textContent as string
    postSelections.send(
      props.bookId,
      props.index,
      selectedWord,
      props.currentPage
    )
    props.addSelection(selectedWord.toLowerCase())
  }

  return (
    <Word
      {...props}
      selected={selected}
      translated={!!translation}
      data-translation={translation}
      onClick={handleClick}
    />
  )
}

export { Highlight }
