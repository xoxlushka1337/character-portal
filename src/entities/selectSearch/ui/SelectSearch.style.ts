import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
`

export const SearchInput = styled.input`
  border: 4px solid var(--border-color);
  color: var(--color-text);
  outline: none;
  font-size: var(--fs-main);
  background-color: var(--background-input);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii-mini);
  width: 100%;
  box-shadow: var(--shadow);

  @media (min-width: 767px) {
    width: 280px;
  }
`

export const SuggestionsList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 280px;
  max-height: 200px;
  overflow: auto;
  background-color: var(--background-hints);
  color: black;
  border: 1px solid #ccc;
  border-top: none;
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
