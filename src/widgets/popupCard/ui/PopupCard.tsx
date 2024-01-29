import React, { MouseEvent } from 'react'
import { useGetCharacterIdQuery } from 'shared/api/charactersApi'
import { Character } from 'shared/model/type'
import { cross } from 'shared/assets'
import {
  CharterImg,
  CloseButton,
  InfoItem,
  Name,
  Overlay,
  PopupContainer,
} from './PopupCard.styles'

interface PopupCardProps {
  togglePopup: (id?: number) => void
  isPopupOpen: boolean
  selectedCharacterId: number | null
}

const PopupCard: React.FC<PopupCardProps> = ({
  togglePopup,
  isPopupOpen,
  selectedCharacterId,
}) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    togglePopup()
  }

  const {
    data: character,
    error,
    isLoading,
  } = useGetCharacterIdQuery(selectedCharacterId) as {
    data: Character
    error?: any
    isLoading: boolean
  }

  const characterInfo = character
    ? [
        { label: 'Status', value: character.status },
        { label: 'Species', value: character.species },
        { label: 'Type', value: character.type },
        { label: 'Origin', value: character.origin.name },
        { label: 'Location', value: character.location.name },
      ].filter(Boolean)
    : []

  return isPopupOpen ? (
    <>
      <Overlay onClick={handleClick} />
      <PopupContainer>
        <CloseButton src={cross} onClick={handleClick}></CloseButton>
        {!isLoading && character ? (
          <>
            <CharterImg src={character.image} alt={character.name} />
            <div>
              <Name>{character.name}</Name>
              {characterInfo.map((info, index) => (
                <InfoItem key={index}>
                  <b>{info.label}:</b>
                  {info.value.length > 0 ? info.value : '-'}
                </InfoItem>
              ))}
            </div>
          </>
        ) : null}
      </PopupContainer>
    </>
  ) : null
}

export default PopupCard
