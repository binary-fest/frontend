import { atom, selector } from 'recoil'

interface LinkState {
  id: number
  href: string
  name: string
}

interface FooterLinkGroup {
  group: string,
  list: LinkState[]
}

const navigationLinks = atom<LinkState[]>({
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

const footerLinks = selector<FooterLinkGroup[]>({
  key: 'footerLinks',
  get: ({get}) => {
    const menuLinks = get(navigationLinks)
    const links: FooterLinkGroup[] = [{
      group: 'Contact',
      list: [{
        id: 1,
        name: 'Whatsapp',
        href: ''
      }, {
        id: 2,
        name: 'Telegram',
        href: ''
      }, {
        id: 3,
        name: 'Gmail',
        href: ''
      }]
      }, {
      group: 'Kompetisi',
      list: [{
        id: 1,
        name: 'UI / UX',
        href: ''
      }, {
        id: 2,
        name: 'Internet of Things',
        href: ''
      }]
    }, {
      group: 'Menu',
      list: menuLinks
    }]

    return links
  }
})

export { navigationLinks, footerLinks }