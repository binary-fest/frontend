import { FormHelperText, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { FileUploadState } from '../@types/FileUpload'
import { GradientButton } from '../theme/extends'
import base64 from '../utils/base64'

interface UploadButtonProps {
  onUpload: (file: FileUploadState) => void
  max: number
  id: string
  state: FileUploadState
}

export default function UploadButtonArea(props: UploadButtonProps): ReactElement {
  return (
    <>
      <input
        type="file"
        id={props.id}
        style={{ display: 'none' }}
        onChange={(e) => {
          if (!e.target.files) return

          const file = e.target.files[0]

          if (file.size > props.max) {
            const sizeFix = Math.floor(props.max / 1000000)
            const sizeText = `Maksimal ukuran file ${sizeFix}MB`
            props.onUpload({ fileName: '', base64: '', size: 0, error: sizeText })
            return
          }
          base64(file, (data) => {
            props.onUpload({ fileName: file.name, base64: data as string, size: 0, error: '' })
          })
        }}
      />
      <GradientButton>
        <label
          htmlFor={props.id}
          style={{
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Pilih File
        </label>
      </GradientButton>
      <Typography variant="caption" className="file-name">
        {props.state.fileName || "Tidak ada file dipilih"}
      </Typography>
      <FormHelperText error={!!props.state.error}>{props.state.error}</FormHelperText> 
    </>
  )
}
