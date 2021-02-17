import { isExternalUrl } from '../utils/validate'

test("check is external url", () => {
  expect(isExternalUrl("/")).toBeFalsy()
  expect(isExternalUrl("/hello")).toBeFalsy()
  expect(isExternalUrl("https://www.binaryfest.or.id/")).toBeTruthy()
  expect(isExternalUrl("https://binaryfest.or.id/")).toBeTruthy()
  expect(isExternalUrl("http://www.binaryfest.or.id/")).toBeTruthy()
  expect(isExternalUrl("http://binaryfest.or.id/")).toBeTruthy()
})