import { useEndpoint } from "./useEndpoint"
import { Book, BookRead } from "../types/book"

const useGet = () => {
  const configPost = () => ({ url: "/v1/books", method: "GET" })
  return useEndpoint<Parameters<typeof configPost>, Book>(configPost)
}

const useGetRead = () => {
  const configPost = (id: string, page: number) => ({
    url: `/v1/books/${id}/read?page=${page}`,
    method: "GET"
  })
  //@ts-ignore
  return useEndpoint<Parameters<typeof configPost>, BookRead>(configPost)
}

const useBook = () => {
  const [get, setGet] = useGet()
  const [getRead, setGetRead] = useGetRead()
  return {
    get: { send: setGet, ...get },
    getRead: { send: setGetRead, ...getRead }
  }
}

export { useBook }
