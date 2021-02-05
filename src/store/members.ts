import { atom, selector } from 'recoil'
import { MemberState } from '../@types/Member'

const membersState = atom<MemberState[]>({
  key: 'membersState',
  default: []
})

const leaderAtom = selector<MemberState>({
  key: 'leaderAtom',
  get: ({ get }) => {
    const members = get(membersState)
    const [leader] = members.filter(member => member.isLeader)

    return leader
  }
})

export default membersState
export { leaderAtom }