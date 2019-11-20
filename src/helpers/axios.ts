import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 3000
})

const setHeader = (accessToken: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
}

export { instance as axios, setHeader }
