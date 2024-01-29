import { useState } from 'react'
import styled from 'styled-components'

interface SearchProps {
  valueSearch: string
  setValueSearch: any
}

const InputContainer = styled.label`
  input {
    border: 4px solid var(--border-color);
    outline: none;
    font-size: var(--fs-main);
    background-color: var(--background-input);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii-mini);
    width: 100%;
    box-shadow: var(--shadow);
    color: var(--color-text);

    @media (min-width: 767px) {
      width: 500px;
    }
  }
`

const Search: React.FC<SearchProps> = ({ valueSearch, setValueSearch }) => {
  return (
    <InputContainer>
      <input
        type="search"
        placeholder="🔎 Filter by name..."
        onChange={(e) => setValueSearch(e.target.value)}
        value={valueSearch}
      />
    </InputContainer>
  )
}

export default Search
