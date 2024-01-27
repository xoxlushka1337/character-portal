import React from 'react'
import { Card } from 'entities/card'
import { useGetCharactersFilterQuery } from 'shared/api/charactersApi'
import { CharactersData } from 'shared/model/type'
import styled from 'styled-components'

interface ListCardsProps {
  filters: {
    name?: string
    status?: string
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
  const {
    data: charactersDataFilter,
    error,
    isLoading,
  } = useGetCharactersFilterQuery(filters) as {
    data: CharactersData
    error?: any
    isLoading?: boolean
  }

  // const characters: Character[] = charactersData.results

  if (filters) {
    console.log(charactersDataFilter)
  }

  if (error) {
    return <div className="">Nothing was found</div>
  }

  return !isLoading ? (
    <Container>
      {charactersDataFilter.results.map((character) => (
        <Card
          key={character.id}
          img={character.image}
          name={character.name}
          gender={character.gender}
          status={character.status}
        />
      ))}
    </Container>
  ) : (
    <div className="">23456</div>
  )
}

export default ListCards
