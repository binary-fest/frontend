import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { GradientTypography, WhiteTypography } from '../../theme/extends'
import { StyledErroPageFooter, StyledErrorPage } from './404.styled'

export default function ErrorPage(): ReactElement {
  return (
    <StyledErrorPage>
      <div>
        <GradientTypography
          style={{ fontSize: '100px', fontWeight: 'bold' }}
          align="center"
        >404</GradientTypography>
        <WhiteTypography
          variant="h3"
          style={{ fontWeight: 400 }}
          align="center"
        >Page not Found</WhiteTypography>
      </div>
      <StyledErroPageFooter>
        <Link to="/">
          <WhiteTypography>Back to Homepage</WhiteTypography>
        </Link>
      </StyledErroPageFooter>
    </StyledErrorPage>
  )
}
