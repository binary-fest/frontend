import React, { ReactElement } from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface LinkScrollProps extends LinkProps {}

export default function LinkScroll(props: LinkScrollProps): ReactElement {
  const scrollToTop = () => window.scrollTo(0, 0)

  return (<Link {...props} onClick={scrollToTop}>{props.children}</Link>)
}
