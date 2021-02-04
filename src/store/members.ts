import { atom } from 'recoil'

interface Member {
  name: string
  nim: string
  email: string
  phone: string
  gender: "pria" | "wanita"
  isAdmin: boolean
}

const membersAtom = atom<Member[]>({
  key: 'membersAtom',
  default: []
})

export default membersAtom
export type { Member }