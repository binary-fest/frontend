import { useState } from 'react'

const useTitlePage = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle || "BinaryFest 2021")
  document.title = title

  return [title, setTitle]
}

export default useTitlePage;