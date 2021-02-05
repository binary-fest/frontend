import { atom, selector } from 'recoil'

interface Member {
  name: string
  nim: string
  email: string
  phone: string
  gender: "pria" | "wanita" | ""
  isAdmin: boolean,
}

const membersAtom = atom<Member[]>({
  key: 'membersAtom',
  default: []
})

const leaderAtom = selector<Member>({
  key: 'leaderAtom',
  get: ({ get }) => {
    const members = get(membersAtom)
    const [leader] = members.filter(member => member.isAdmin)

    return leader
  }
})

export default membersAtom
export { leaderAtom }
export type { Member }