import React from 'react'
import { Card } from 'entities/card'
import {
  useGetCharactersFilterQuery,
  useGetCharactersQuery,
} from 'shared/api/charactersApi'
import { Character, CharactersData } from 'shared/model/type'
import styled from 'styled-components'

interface ListCardsProps {
  filters: {
    name?: string
    status?: string // Добавьте другие свойства, если необходимо
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
    data: charactersData,
    error,
    isLoading,
  } = useGetCharactersQuery('') as {
    data: CharactersData
    error?: any
    isLoading?: boolean
  }

  const { data: charactersDataFilter } = useGetCharactersFilterQuery(
    filters,
  ) as {
    data: CharactersData
  }

  // const characters: Character[] = charactersData.results

  if (filters) {
    console.log(charactersDataFilter)
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
