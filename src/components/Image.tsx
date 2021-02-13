import React, { ReactElement } from 'react'

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

const CLOUDINARY_URL = "https://res.cloudinary.com/binaryfest/image/upload/web/"

function Image(props: Props): ReactElement {
  return (<img {...props} src={CLOUDINARY_URL + props.src} alt={props.alt}/>)
}

export default React.memo(Image)
