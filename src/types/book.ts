export interface AllSelectionsError {
  error: string
}

export type AllSelections = string[]

export interface Selection {
  id: number
  index: number
  selection: string
  translation: string | ""
  page: number
}

export interface SelectionError {
  error: string
}

export interface Book {
  id: String
}

export interface BookReadError {
  error: string
}

export interface BookRead {
  text?: string
  page: number
  totalPages: number
  selections: Selection[]
}

export interface Books {
  id: string
  title: string
  pages: {
    id: string
    page: number
    text: string
  }
}

export interface BooksError {
  error: string
}
