import { BookRead, AllSelections } from "../types/book"
import { textToArray } from "../helpers"

export type Word = ReturnType<typeof ReaderOrm>[0]

const ReaderOrm = (
  data: BookRead,
  selections: AllSelections,
  currentPage: number,
  bookId: number,
  addSelection: (word: string) => void
) => {
  let index: { [key: string]: number } = {}

  const textSplitted = textToArray(data.text ?? "")

  return textSplitted.map(text => {
    const word = text.toLowerCase()

    //set current word index
    index[word] = index[word] >= 0 ? index[word] + 1 : 0

    // find if this word was translated
    const translation = data.selections.filter(
      item => word === item.selection && item.index === index[word]
    )

    // find if this word was selected at any moment
    const isSelected = selections.includes(word.toLowerCase())

    return {
      key: `${word}_${index[word]}`,
      index: index[word],
      selected: isSelected,
      translation: isSelected ? translation[0]?.translation : "",
      children: text,
      bookId,
      currentPage,
      addSelection
    }
  })
}

export { ReaderOrm }
