import React, { ReactElement } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { initialMemberModal, memberModalState } from '../store/members'
import { isMemberModalShowState } from '../store/ui'
import Backdrop from './Backdrop'
import MemberModal from './MemberModal'
import { CSSTransition } from 'react-transition-group'

export default function MemberModalPopup(): ReactElement {
  const [isMemberModalShow, setIsMemberModalShow] = useRecoilState(isMemberModalShowState)
  const setMemberModalState = useSetRecoilState(memberModalState)

  const resetMemberModal = () => {
    setMemberModalState(initialMemberModal)
    setIsMemberModalShow(false)
  }

  return (
    <>
      <CSSTransition
        in={isMemberModalShow}
        classNames="animate-MemberModal"
        timeout={500}
        unmountOnExit
      >
        <MemberModal />
      </CSSTransition>
      <CSSTransition
        in={isMemberModalShow}
        classNames="animate-Backdrop"
        timeout={500}
        unmountOnExit
      >
        <Backdrop zIndex={999} onClick={resetMemberModal}/>
      </CSSTransition>
    </>
  )
}
