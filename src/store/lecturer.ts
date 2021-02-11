import { LecturerState } from '../@types/Lecturer'
import { atom } from 'recoil';

const lecturerState = atom<LecturerState[]>({
  key: 'lecturerState',
  default: [{
    name: 'Ir Onno W Purbo, M.Eng., Ph.D.',
    job: 'Pakar IT Nasional',
    id: '1',
    profilePict: ''
  }, {
    name: 'Anak Agung Duwi Arsana',
    job: 'Youtuber dan Praktisi Bidang Elektronika',
    id: '2',
    profilePict: ''
  }]
})

export {
  lecturerState
}