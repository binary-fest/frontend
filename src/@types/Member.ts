type GenderType = "man" | "woman"
type RoleType = "ketua" | "anggota"

interface Member {
  name: string
  student_id: string
  gender: GenderType
  isLeader: boolean
  phone: string
}

interface MemberFormik {
  name: string,
  student_id: string,
  phone: string,
  gender: GenderType,
  role: RoleType,
}

interface MemberState extends Member {
  id: string
}

interface IndexedMemberState extends MemberState {
  idx: number
}

export type { Member, GenderType, MemberState, MemberFormik, IndexedMemberState }