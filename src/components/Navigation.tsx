import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { isNavigationResponsiveShowAtom } from '../store/ui'
import NavigationDesktop from './NavigationDesktop'
import NavigationResponsive from './NavigationResponsive'

export default function Navigation(): ReactElement {
  const isNavigationResponsiveShow = useRecoilValue(isNavigationResponsiveShowAtom)

  return (
    <>
      <NavigationDesktop />
      {isNavigationResponsiveShow && <NavigationResponsive />}
    </>
  )
}
