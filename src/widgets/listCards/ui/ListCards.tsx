import React, { useState, useEffect } from 'react'
import { Card } from 'entities/card'
import { useGetCharactersFilterQuery } from 'shared/api/charactersApi'
import { Character, CharactersData } from 'shared/model/type'
import styled from 'styled-components'
import { PopupCard } from 'widgets/popupCard'

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

const LoadMoreButton = styled.div`
  cursor: pointer;
  color: blue;
  margin-top: 20px;
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

  const [charactersData, setCharactersData] = useState<CharactersData | null>(
    null,
  )
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: charactersDataFilter,
    error,
    isLoading,
    refetch,
  } = useGetCharactersFilterQuery({ ...filters, page: currentPage }) as {
    data: CharactersData
    error?: any
    isLoading: boolean
    refetch: () => void
  }

  useEffect(() => {
    if (charactersDataFilter) {
      setCharactersData(charactersDataFilter)
    }
  }, [charactersDataFilter])

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1)
    // Сбросьте предыдущие данные
    setCharactersData(null)
  }

  const handleLoadMore1 = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
    // Сбросьте предыдущие данные
    setCharactersData(null)
  }

  useEffect(() => {
    refetch()
  }, [currentPage, refetch])

  if (error) {
    return <div className="">Nothing was found</div>
  }

  return (
    <>
      {!isLoading && charactersData && (
        <Container>
          {charactersData.results.map((character: Character) => (
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
      {charactersData && charactersData.info.next && (
        <div className="">
          <div onClick={handleLoadMore1}>Назад</div>
          <LoadMoreButton onClick={handleLoadMore}>Следующая</LoadMoreButton>
        </div>
      )}
    </>
  )
}

export default ListCards
