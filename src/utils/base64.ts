const base64 = (file: File, callback: (encode: string) => void) => {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = () => callback(fileReader.result as string)
}

export default base64