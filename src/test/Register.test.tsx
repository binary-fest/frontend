import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Register from '../pages/Register'
import { RecoilRoot } from 'recoil'
import http from '../utils/http'
import { mocked } from 'ts-jest/utils'

const getValueObject = (value: string) => ({target: {value}})

jest.mock('../utils/http')
const httpMocked = mocked(http, true)

beforeEach(() => {
  httpMocked.post.mockResolvedValue({ data: {} })
})

test('sending request register', async () => {
 render(
    <RecoilRoot>
      <Register />
    </RecoilRoot>
  )
  fireEvent.change(screen.getByTestId('input-name-team'), getValueObject('hi'))
  fireEvent.change(screen.getByTestId('input-email-team'), getValueObject('alfian.23andi@gmail.com'))
  fireEvent.change(screen.getByTestId('input-institute-team'), getValueObject('hi'))
  fireEvent.change(screen.getByTestId('input-title-team'), getValueObject('hi'))
  fireEvent.change(screen.getByTestId('input-url-files-team'), getValueObject('hi'))

  fireEvent.click(screen.getByTestId('show-MemberModal'))
  await waitFor(() => screen.getByTestId('title-MemberModal'))
  fireEvent.change(screen.getByTestId('input-name-member'), getValueObject('Alfian Andi'))
  fireEvent.change(screen.getByTestId('input-student-id-member'), getValueObject('alfian.23andi@gmail.com'))
  fireEvent.change(screen.getByTestId('input-email-member'), getValueObject('alfian@gmail.com'))
  fireEvent.change(screen.getByTestId('input-whatsapp-member'), getValueObject('hi'))
  fireEvent.click(screen.getByTestId('gender-man'))
  fireEvent.click(screen.getByTestId('role-leader'))

  fireEvent.click(screen.getByTestId('verify-responsibility'))
  fireEvent.click(screen.getByTestId('verify-google-drive'))

  fireEvent.click(screen.getByTestId('add-member-button'))
  await waitFor(() => expect(screen.queryByTestId('title-MemberModal')).not.toBeInTheDocument())
  await waitFor(() => fireEvent.click(screen.getByTestId('register-button')))
  
  expect(screen.getByText('Alfian Andi')).toBeInTheDocument()
  expect(screen.getByText('alfian@gmail.com')).toBeInTheDocument()
  expect(screen.getByText('Ketua')).toBeInTheDocument()

  await waitFor(() => expect(httpMocked.post).toBeCalled())
})