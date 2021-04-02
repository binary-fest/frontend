import { LecturerState } from '../@types/Lecturer'
import { atom } from 'recoil';

const lecturerState = atom<LecturerState[]>({
  key: 'lecturerState',
  default: [{
    name: 'Ir Onno W Purbo, M.Eng., Ph.D.',
    job: 'Pakar IT Nasional',
    id: '1',
    profilePict: 'https://res.cloudinary.com/binaryfest/image/upload/v1613226675/web/cgfmrx.jpg'
  }, {
    name: 'Oby Zamisyak, B.Ed',
    job: 'Professional Electronics Arduino IoT',
    id: '2',
    profilePict: 'https://res.cloudinary.com/binaryfest/image/upload/v1613226674/web/yufbp7.jpg'
  }]
})

export {
  lecturerState
}