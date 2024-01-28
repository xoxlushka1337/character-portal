import React, { MouseEvent } from 'react'
import { useGetCharacterIdQuery } from 'shared/api/charactersApi'
import { Character } from 'shared/model/type'
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

  return (
    <>
      {isPopupOpen && (
        <>
          <Overlay onClick={handleClick} />
          <PopupContainer>
            <CloseButton onClick={handleClick}>&times;</CloseButton>
            {!isLoading && (
              <>
                <CharterImg src={character.image} alt={character.name} />
                <div>
                  <Name>{character.name}</Name>
                  <InfoItem>
                    <b>Status:</b> {character.status}
                  </InfoItem>
                  <InfoItem>
                    <b>Species:</b> {character.species}
                  </InfoItem>
                  {character.type && (
                    <InfoItem>
                      <b>Type:</b> {character.type}
                    </InfoItem>
                  )}
                  <InfoItem>
                    <b>Location:</b> {character.location.name}
                  </InfoItem>
                </div>
              </>
            )}
          </PopupContainer>
        </>
      )}
    </>
  )
}

export default PopupCard
