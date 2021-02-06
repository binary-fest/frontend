import React, { ReactElement } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { initialMemberModal, memberModalState } from '../store/members'
import { isMemberModalShowState } from '../store/ui'
import Backdrop from './Backdrop'
import MemberModal from './MemberModal'

export default function MemberModalPopup(): ReactElement {
  const [isMemberModalShow, setIsMemberModalShow] = useRecoilState(isMemberModalShowState)
  const setMemberModalState = useSetRecoilState(memberModalState)

  const resetMemberModal = () => {
    setMemberModalState(initialMemberModal)
    setIsMemberModalShow(false)
  }

  return (
    <>
      {isMemberModalShow && (
        <>
          <MemberModal />
          <Backdrop zIndex={999} onClick={resetMemberModal} />
        </>
      )
      }
    </>
  )
}
