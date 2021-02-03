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
  default: [
    {
      "name": "Beatrice",
      "nim": "sint",
      "email": "beatriceglenn@squish.com",
      "phone": "(855) 522-2859",
      "gender": "wanita",
      "isAdmin": false
    },
    {
      "name": "Frost",
      "nim": "occaecat",
      "email": "frostglenn@squish.com",
      "phone": "(814) 495-3603",
      "gender": "pria",
      "isAdmin": true
    },
  ]
})

export default membersAtom
export type { Member }