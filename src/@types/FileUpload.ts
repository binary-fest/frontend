interface FileUpload {
  base64: string
  fileName: string
  size: number
}

interface FileUploadState extends FileUpload {
  error: string
}

export type { FileUploadState }
export default FileUpload