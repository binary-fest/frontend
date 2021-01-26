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
    name: 'Webinar',
    href: '/'
  }, {
    id: 2,
    name: 'Kompetisi',
    href: '/competition'
  }, {
    id: 3,
    name: 'Tech Expo',
    href: '/'
  }]
})

const socialMediaLinks = atom<LinkState[]>({
  key: 'socialMediaLinks',
  default: [{
    id: 1,
    name: 'Instagram',
    href: ''
  }, {
    id: 2,
    name: 'Telegram',
    href: ''
  }, {
    id: 3,
    name: 'Youtube',
    href: ''
  }]
})

const socialMediaIcons = selector({
  key: 'socialMediaIcons',
  get: ({ get }) => {
    const socialMediaAtom = get(socialMediaLinks)

    return socialMediaAtom.map((item) => {
      return {
        ...item,
        whiteSvgFile: item.name.toLowerCase() + '-icon.svg',
        gradientSvgFile: item.name.toLowerCase() + '-icon-gradient.svg',
      }
    })
  }
})

const footerLinks = selector<FooterLinkGroup[]>({
  key: 'footerLinks',
  get: ({get}) => {
    const menuLinks = get(navigationLinks)
    const socialMediaAtom = get(socialMediaLinks)
    const links: FooterLinkGroup[] = [{
      group: 'Contact',
      list: socialMediaAtom
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

export { navigationLinks, footerLinks, socialMediaIcons }