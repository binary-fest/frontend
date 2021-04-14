import { atom, selector } from 'recoil'

interface LinkState {
  id: number
  href: string
  name: string
  isOpen: boolean
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
    href: '/',
    isOpen: true
  }, {
    id: 2,
    name: 'Kompetisi',
    href: '/competition',
    isOpen: true
  }, {
    id: 3,
    name: 'Tech Expo',
    href: 'https://expo.binaryfest.or.id/',
    isOpen: false
  },{
    id: 4,
    name: 'About',
    href: '/about',
    isOpen: true
  }]
})

const socialMediaLinks = atom<LinkState[]>({
  key: 'socialMediaLinks',
  default: [{
    id: 1,
    name: 'Instagram',
    href: 'https://www.instagram.com/binaryfest.uty/',
    isOpen: true
  }, {
    id: 2,
    name: 'Telegram',
    href: '',
    isOpen: true
  }, {
    id: 3,
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UCB85z5VHQwDCXdnR5F-VAAg',
    isOpen: true
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
        href: '/competition',
        isOpen: true
      }, {
        id: 2,
        name: 'Internet of Things',
        href: '/competition',
        isOpen: true
      }]
    }, {
      group: 'Menu',
      list: menuLinks
    }]

    return links
  }
})

export { navigationLinks, footerLinks, socialMediaIcons }