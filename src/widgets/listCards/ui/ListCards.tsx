import { Card } from 'entities/card'
import { useGetCharactersQuery } from 'shared/api/charactersApi'
import { Character, CharactersData } from 'shared/model/type'

const ListCards = () => {
  const {
    data: charactersData,
    error,
    isLoading,
  } = useGetCharactersQuery('') as {
    data: CharactersData
    error?: any
    isLoading?: boolean
  }

  const characters: Character[] = charactersData.results

  if (!isLoading) {
    console.log(characters)
  }

  return !isLoading ? (
    <div>
      {characters.map((character) => (
        <Card
          img={character.image}
          name={character.name}
          gender={character.gender}
          status={character.status}
        />
      ))}
    </div>
  ) : (
    <div className="">23456</div>
  )
}

export default ListCards
