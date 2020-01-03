import { useState, useEffect } from "react"
import { AxiosResponse, AxiosError } from "axios"
import { axios } from "../helpers"

interface Store<D, E> {
  data?: D
  pending: boolean
  status: number | undefined
  error: E | undefined
}

const initialStore = {
  pending: false,
  status: undefined,
  error: undefined
}

const useEndpoint = <T extends (...args: any[]) => any, Data, Error = string>(
  fn: T
): [Store<Data, Error>, (...args: Parameters<T>) => any] => {
  const [store, setStore] = useState<Store<Data, Error>>(initialStore)
  const [request, setRequest] = useState()
  useEffect(() => {
    if (!request) return
    setStore({ ...initialStore, pending: true })
    axios(request)
      .then((res: AxiosResponse<Data>) => {
        setStore({ ...initialStore, data: res.data, status: 200 })
      })
      .catch((e: AxiosError<Error>) => {
        const errorCode = (e.response && e.response.status) || 500
        errorCode >= 500 && console.error(e.message)
        setStore({
          ...initialStore,
          status: errorCode,
          error: e.response && e.response.data
        })
      })
  }, [request])
  return [store, (...args) => setRequest(fn(...args))]
}

export { useEndpoint }
