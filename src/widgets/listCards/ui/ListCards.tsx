import React, { useState, useEffect } from 'react'
import { Card } from 'entities/card'
import { useGetCharactersFilterQuery } from 'shared/api/charactersApi'
import { Character, CharactersData } from 'shared/model/type'
import styled from 'styled-components'

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
          {/* Используйте charactersData.results, чтобы избежать дублирования */}
          {charactersData.results.map((character: Character) => (
            <Card
              key={character.id} // Используйте уникальный ключ, например, id
              img={character.image}
              name={character.name}
              gender={character.gender}
              status={character.status}
              type={character.type}
            />
          ))}
        </Container>
      )}
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
