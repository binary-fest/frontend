import { LecturerState } from '../@types/Lecturer'
import { atom } from 'recoil';

const lecturerState = atom<LecturerState[]>({
  key: 'lecturerState',
  default: [{
    name: 'Ir Onno W Purbo, M.Eng., Ph.D.',
    job: 'Pakar IT Nasional',
    id: '1',
    profilePict: 'https://stokpic.com/wp-content/uploads/2017/07/Friends-Playing-In-The-Sea-and-Spashing-Water-2-400x284.jpg'
  }, {
    name: 'Anak Agung Duwi Arsana',
    job: 'Youtuber dan Praktisi Bidang Elektronika',
    id: '2',
    profilePict: 'https://stokpic.com/wp-content/uploads/2017/07/Friends-Playing-In-The-Sea-and-Spashing-Water-2-400x284.jpg'
  }]
})

export {
  lecturerState
}