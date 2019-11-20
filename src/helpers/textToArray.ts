const textToArray = (text: string) => {
  const reg = new RegExp(/([\w]+)/, "gi")
  return text.split(reg)
}

export { textToArray }
