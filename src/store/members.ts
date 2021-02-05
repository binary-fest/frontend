import { atom, selector } from 'recoil'
import { MemberState } from '../@types/Member'

const initialMemberModal: MemberState = {
  id: '',
  name: '',
  student_id: '',
  email: '',
  gender: 'pria',
  isLeader: false,
  phone: '',
}

const membersState = atom<MemberState[]>({
  key: 'membersState',
  default: []
})

const memberModalState = atom<MemberState>({
  key: 'memberModalState',
  default: initialMemberModal
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
export { leaderAtom, memberModalState }