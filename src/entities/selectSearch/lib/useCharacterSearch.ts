import { useEffect, useState, ChangeEvent } from 'react'
import { useGetAllCharactersQuery } from 'shared/api/charactersApi'

const useCharacterSearch = (
  searchKey: string,
  onSelect: (selectedOption: string) => void,
) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const {
    data: charactersData,
    refetch,
    isLoading,
  } = useGetAllCharactersQuery({})

  useEffect(() => {
    const fetchAllTypes = async () => {
      const allTypes: Set<string> = new Set()

      // Fetch data from the first page
      const initialData = await refetch()
      const initialTypes = extractTypesFromData(initialData, searchKey)

      // Add types from the first page
      initialTypes.forEach((type: string) => allTypes.add(type))

      setSuggestions(Array.from(allTypes))
    }

    if (charactersData) {
      fetchAllTypes()
    }
  }, [charactersData, refetch, searchKey])

  const extractTypesFromData = (data: any, key: string) => {
    return data.data.map((character: any) => character[key])
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setIsOpen(true)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion)
    onSelect(suggestion)
    setIsOpen(false)
  }

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return {
    isOpen,
    searchTerm,
    suggestions,
    isLoading,
    handleInputChange,
    handleSuggestionClick,
    filteredSuggestions,
  }
}

export default useCharacterSearch
