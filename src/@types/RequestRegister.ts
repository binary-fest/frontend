interface Team {
  name: string
  email: string
  instansi: string
  judul: string
}

interface Member {
  name: string
  email: string
  gender: "pria" | "wanita"
  isLeader: boolean
  phone: string
  ktm_base64: string
  picture_base64: string
  screenshot_base64: string
}

export type { Team, Member }