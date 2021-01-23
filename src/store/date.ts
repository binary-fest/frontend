import { atom } from 'recoil';

const countdownEventDateAtom = atom<Date>({
  key: 'countdownEventDate',
  default: new Date("2021-03-01:0:0:0")
})

export { countdownEventDateAtom }