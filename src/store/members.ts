import { atom, selector } from 'recoil'
import { IndexedMemberState, Member, MemberState } from '../@types/Member'

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

const membersRequestBodyState = selector<Member[]>({
  key: 'membersRequestBodyState',
  get: ({get}) => {
    const members = get(membersState)
    let hasLeader = false
    const newMembers = members.map(member => {
      member.isLeader && (hasLeader = true)

      return {
        name: member.name,
        student_id: member.student_id,
        email: member.email,
        gender: member.gender,
        isLeader: member.isLeader,
        phone: member.phone
      }
    })

    return hasLeader ? newMembers : []
  }
})

const indexedMemberState = selector<IndexedMemberState[]>({
  key: 'indexedMemberState',
  get: ({get}) => {
    const members = get(membersState)
    let nonLeaderIndex = 0

    const newMembers = members.map(member => {
      if (!member.isLeader) nonLeaderIndex++
      return {
        idx: nonLeaderIndex,
        ...member
      }
    })

    return newMembers
  }
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
export { indexedMemberState, leaderAtom, memberModalState, initialMemberModal, membersRequestBodyState }