import React from "react"
import { useHotkeys } from "react-hotkeys-hook"

interface Pagination {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}
const Pagination = ({ page, totalPages, onPageChange }: Pagination) => {
  useHotkeys("left", () => page > 0 && onPageChange(page - 1))
  useHotkeys("right", () => page < totalPages - 1 && onPageChange(page + 1))
  return <div></div>
}

export { Pagination }
