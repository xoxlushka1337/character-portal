import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
`

export const SearchInput = styled.input`
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const SuggestionsList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 300px;
  max-height: 200px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  padding: 0;
  margin: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

export const SuggestionItem = styled.li`
  list-style-type: none;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`
