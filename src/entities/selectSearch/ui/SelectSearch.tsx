import React from 'react'

import {
  SearchContainer,
  SearchInput,
  SuggestionItem,
  SuggestionsList,
} from './SelectSearch.style'
import { useCharacterSearch } from '../lib'

interface TypeSearchProps {
  searchKey: string
}

const SelectSearch: React.FC<TypeSearchProps> = ({ searchKey }) => {
  const {
    isOpen,
    searchTerm,
    suggestions,
    isLoading,
    handleInputChange,
    handleSuggestionClick,
    filteredSuggestions,
  } = useCharacterSearch(searchKey)

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={`Search ${searchKey}...`}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <SuggestionsList isOpen={isOpen}>
          {filteredSuggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </SearchContainer>
  )
}

export default SelectSearch
