import { atom } from 'recoil';

const isNavigationResponsiveShowAtom = atom({
  key: 'isNavigationResponsiveShowAtom',
  default: false
})

const isParticipantModalShowAtom = atom({
  key: "isParticipantModalShowAtom",
  default: false
})

export { isNavigationResponsiveShowAtom, isParticipantModalShowAtom }