// ListCards.tsx
import React, { useState, useEffect } from 'react'
import { Card } from 'entities/card'
import styled from 'styled-components'
import { PopupCard } from 'widgets/popupCard'
import { SwitchPage } from 'features/switchPage'
import { useCharactersData, usePagination } from '../lib'

interface ListCardsProps {
  filters: {
    name?: string
    status?: string
    gender?: string
    type?: string
    species?: string
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 767px) {
    justify-content: space-between;
  }
`

const ListCards: React.FC<ListCardsProps> = ({ filters }) => {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null,
  )

  const togglePopup = (id?: number) => {
    setSelectedCharacterId(isPopupOpen ? null : id || null)
    setPopupOpen(!isPopupOpen)
  }

  const { currentPage, handleNextPage, handlePreviousPage } = usePagination()
  const { charactersDataFilter, error, isLoading, refetch } = useCharactersData(
    filters,
    currentPage,
  )

  useEffect(() => {
    refetch()
  }, [currentPage, refetch])

  if (error) {
    return <div className="">Nothing was found</div>
  }

  return (
    <>
      {!isLoading && charactersDataFilter && (
        <Container>
          {charactersDataFilter.results.map((character: any) => (
            <Card
              key={character.id}
              img={character.image}
              name={character.name}
              gender={character.gender}
              status={character.status}
              type={character.type}
              onClick={() => togglePopup(character.id)}
            />
          ))}
        </Container>
      )}
      <PopupCard
        togglePopup={togglePopup}
        isPopupOpen={isPopupOpen}
        selectedCharacterId={selectedCharacterId}
      />
      {charactersDataFilter && charactersDataFilter.info.next && (
        <SwitchPage
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      )}
    </>
  )
}

export default ListCards
