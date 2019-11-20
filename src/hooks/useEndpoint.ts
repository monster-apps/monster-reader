import { useState, useEffect } from "react"
import { AxiosResponse } from "axios"
import { axios } from "../helpers"

interface Store<D> {
  data?: D
  pending: boolean
  error: string | null
}

const initialStore = {
  pending: false,
  error: null
}

const useEndpoint = <T extends T[], C>(
  fn: (...args: T) => void
): [Store<C>, (...args: T) => void] => {
  const [store, setStore] = useState<Store<C>>(initialStore)
  const [request, setRequest] = useState()
  useEffect(() => {
    if (!request) return
    setStore({ ...initialStore, pending: true })
    axios(request)
      .then((res: AxiosResponse<C>) =>
        setStore({ ...initialStore, data: res.data })
      )
      .catch(e => setStore({ ...initialStore, error: e.message }))
  }, [request])
  return [store, (...args) => setRequest(fn(...args))]
}

export { useEndpoint }
