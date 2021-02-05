type GenderType = "pria" | "wanita"
type RoleType = "ketua" | "anggota"

interface Member {
  name: string
  student_id: string
  email: string
  gender: GenderType
  isLeader: boolean
  phone: string
}

interface MemberFormik {
  name: string,
  student_id: string,
  email: string,
  phone: string,
  gender: GenderType,
  role: RoleType,
}

interface MemberState extends Member {
  id: string
}

export type { Member, GenderType, MemberState, MemberFormik }