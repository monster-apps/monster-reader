/* eslint-disable react-hooks/rules-of-hooks */
import {
  BookRead,
  BookReadError,
  AllSelectionsError,
  AllSelections,
  Selection
  // BooksError,
  // Books
} from "../types/book"
import { useEndpoint } from "./useEndpoint"

// const useGet = () => {
//   const config = (bookId: number) => ({
//     url: `/v1/books/${bookId}`
//   })
//   return useEndpoint<typeof config, Books, BooksError>(config)
// }

const useGetRead = () => {
  const config = (bookId: number, page: number) => ({
    url: `/v1/books/${bookId}/read`,
    params: { page }
  })
  return useEndpoint<typeof config, BookRead, BookReadError>(config)
}

const useGetSelections = () => {
  const config = (bookId: number) => ({
    url: `/v1/books/${bookId}/selections`
  })
  return useEndpoint<typeof config, AllSelections, AllSelectionsError>(config)
}
const usePostSelections = () => {
  const config = (
    bookId: number,
    index: number,
    selection: string,
    page: number
  ) => ({
    method: "POST",
    url: `/v1/books/${bookId}/selections`,
    data: { index, selection, page }
  })
  return useEndpoint<typeof config, Selection>(config)
}

const useBook = () => {
  // const [get, setGet] = useGet()
  const [getRead, setGetRead] = useGetRead()
  const [getSelections, setGetSelections] = useGetSelections()
  const [postSelections, setPostSelections] = usePostSelections()

  return {
    getRead: { send: setGetRead, ...getRead },
    getSelections: { send: setGetSelections, ...getSelections },
    postSelections: { send: setPostSelections, ...postSelections }
  }
}
export { useBook }
