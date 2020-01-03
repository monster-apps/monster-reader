import React, { useState, useEffect } from "react"

import { useBook, useMountEffect } from "../hooks"
import { Reader } from "./Reader"
import { ReaderOrm } from "./Reader.orm"
import { Container, Wrapper } from "./Reader.styles"
import { Pagination } from "../Pagination"
import { AllSelections } from "../types/book"

interface ReaderWrapper {
  bookId: number
}
const ReaderWrapper = ({ bookId }: ReaderWrapper) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [selections, setSelections] = useState<AllSelections>([])
  const { getRead, getSelections } = useBook()

  useMountEffect(() => {
    getRead.send(bookId, currentPage)
    getSelections.send(bookId)
  })

  // when page change
  useEffect(() => {
    getRead.send(bookId, currentPage)
  }, [currentPage])

  // when data from selections change after load first time
  useEffect(() => {
    setSelections(getSelections?.data ?? [])
  }, [getSelections.data?.toString()]) // eslint-disable-line react-hooks/exhaustive-deps

  const addSelection = (value: string) => {
    const selectionsAdded = selections ? [...selections, value] : [value]
    setSelections(selectionsAdded)
  }

  if (!getRead.data || !getSelections.data) return <div>loading...</div>

  const words = ReaderOrm(
    getRead.data,
    selections,
    currentPage,
    bookId,
    addSelection
  )

  return (
    <Wrapper>
      <Container>
        <Reader words={words} />
        <Pagination
          page={currentPage}
          onPageChange={setCurrentPage}
          totalPages={getRead.data.totalPages}
        />
      </Container>
    </Wrapper>
  )
}

export { ReaderWrapper as Reader }
