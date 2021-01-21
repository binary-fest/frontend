import { atom } from 'recoil'

interface NavigationLink {
  id: number
  href: string
  name: string
}

const navigationLinks = atom<NavigationLink[]>({
  key: 'navigationLinks',
  default: [{
    id: 1,
    name: 'Home',
    href: '/'
  }, {
    id: 2,
    name: 'About',
    href: '/about'
  }, {
    id: 3,
    name: 'Kompetisi',
    href: '/competition'
  }, {
    id: 4,
    name: 'Expo',
    href: '/expo'
  }]
})

export { navigationLinks }