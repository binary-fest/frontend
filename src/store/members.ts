import { atom } from 'recoil'
import FileUpload from '../@types/FileUpload'

interface Member {
  name: string
  nim: string
  email: string
  phone: string
  gender: "pria" | "wanita" | ""
  isAdmin: boolean,
  pictureFile?: FileUpload
  profileCardFile?: FileUpload
  screenshotFile?: FileUpload
}

const membersAtom = atom<Member[]>({
  key: 'membersAtom',
  default: []
})

export default membersAtom
export type { Member }