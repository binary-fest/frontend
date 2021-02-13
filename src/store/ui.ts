import { atom } from 'recoil';

const isNavigationResponsiveShowAtom = atom({
  key: 'isNavigationResponsiveShowAtom',
  default: false
})

const isMemberModalShowState = atom({
  key: "isMemberModalShowState",
  default: false
})

export { isNavigationResponsiveShowAtom, isMemberModalShowState }