type GenderType = "pria" | "wanita"

interface Member {
  name: string
  student_id: string
  email: string
  gender: GenderType
  isLeader: boolean
  phone: string
}

interface MemberState extends Member {
  id: string
}

export type { Member, GenderType, MemberState }