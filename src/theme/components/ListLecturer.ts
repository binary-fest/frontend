import styled from 'styled-components'
import theme from '../index'

const StyledListLecturer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.breakpoints.up('sm')} {
    & {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }
`

export {
  StyledListLecturer
}