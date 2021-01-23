import { useState } from 'react'

const useTitlePage = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle || "React App")
  document.title = title

  return [title, setTitle]
}

export default useTitlePage;