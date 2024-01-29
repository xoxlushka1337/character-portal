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
  onSelect: (selectedOption: string) => void
}

const SelectSearch: React.FC<TypeSearchProps> = ({ searchKey, onSelect }) => {
  const {
    isOpen,
    searchTerm,
    suggestions,
    handleInputChange,
    handleSuggestionClick,
    filteredSuggestions,
  } = useCharacterSearch(searchKey, onSelect)

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder={`🔎 Search ${searchKey}...`}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <SuggestionsList isOpen={isOpen}>
          {filteredSuggestions.length !== 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </SuggestionItem>
            ))
          ) : (
            <SuggestionItem>Nothing was found</SuggestionItem>
          )}
        </SuggestionsList>
      )}
    </SearchContainer>
  )
}

export default SelectSearch
