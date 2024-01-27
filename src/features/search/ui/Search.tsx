import { useState } from 'react'
import styled from 'styled-components'

interface SearchProps {
  valueSearch: string
  setValueSearch: any
}

const InputContainer = styled.label`
  background-color: #277322;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Filter by name...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: #18324342;
  color: white;
`

const Search: React.FC<SearchProps> = ({ valueSearch, setValueSearch }) => {
  return (
    <InputContainer>
      <Input
        onChange={(e) => setValueSearch(e.target.value)}
        value={valueSearch}
      ></Input>
    </InputContainer>
  )
}

export default Search
