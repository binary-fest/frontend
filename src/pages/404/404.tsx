import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { GradientTypography, WhiteTypography } from '../../theme/extends'
import { StyledErroPageFooter, StyledErrorPage } from './404.styled'

interface Props {
  title?: string
  caption?: string
}

const initialErrorPageProps: Props = {
  title: '404',
  caption: 'Page not Found'
}

export default function ErrorPage(props: Props): ReactElement {
  return (
    <StyledErrorPage>
      <div>
        <GradientTypography
          style={{ fontSize: '100px', fontWeight: 'bold' }}
          align="center"
          data-aos="fade-in"
        >{props.title}</GradientTypography>
        <WhiteTypography
          variant="h3"
          style={{ fontWeight: 400 }}
          align="center"
          data-aos="fade-in"
          data-aos-delay="250"
        >{props.caption}</WhiteTypography>
      </div>
      <StyledErroPageFooter>
        <Link to="/">
          <WhiteTypography data-aos="fade-in" data-aos-delay="500">Back to Homepage</WhiteTypography>
        </Link>
      </StyledErroPageFooter>
    </StyledErrorPage>
  )
}

ErrorPage.defaultProps = initialErrorPageProps
