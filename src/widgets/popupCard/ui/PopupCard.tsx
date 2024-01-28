import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface PopupCardProps {
  togglePopup: (id?: number) => void
  isPopupOpen: boolean
  selectedCharacterId: number | null
}

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1000;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`

const PopupCard: React.FC<PopupCardProps> = ({
  togglePopup,
  isPopupOpen,
  selectedCharacterId,
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    togglePopup()
  }

  return (
    <>
      {isPopupOpen && (
        <>
          <Overlay onClick={handleClick} />
          <PopupContainer>
            <CloseButton onClick={handleClick}>&times;</CloseButton>
            <h2>This is a Popup</h2>
            <p>{selectedCharacterId}</p>
          </PopupContainer>
        </>
      )}
    </>
  )
}

export default PopupCard
