import React, { ReactElement } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useRecoilValue } from 'recoil'
import { isNavigationResponsiveShowAtom } from '../store/ui'
import NavigationDesktop, { NavigationDesktopProps } from './NavigationDesktop'
import NavigationResponsive from './NavigationResponsive'

export default function Navigation(props: NavigationDesktopProps): ReactElement {
  const isNavigationResponsiveShow = useRecoilValue(isNavigationResponsiveShowAtom)

  return (
    <>
      <NavigationDesktop withLinks={props.withLinks} />
      <CSSTransition
        in={isNavigationResponsiveShow}
        unmountOnExit
        timeout={500}
        classNames="animate-NavigationResponsive"
      >
        <NavigationResponsive />
      </CSSTransition>
    </>
  )
}
