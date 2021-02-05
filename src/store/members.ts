import { atom, selector } from 'recoil'

interface Member {
  name: string
  nim: string
  email: string
  phone: string
  gender: "pria" | "wanita" | ""
  isAdmin: boolean,
}

const membersState = atom<Member[]>({
  key: 'membersState',
  default: []
})

const leaderAtom = selector<Member>({
  key: 'leaderAtom',
  get: ({ get }) => {
    const members = get(membersState)
    const [leader] = members.filter(member => member.isAdmin)

    return leader
  }
})

export default membersState
export { leaderAtom }
export type { Member }