import styled from 'styled-components'

export const CustomSelectContainer = styled.div`
  position: relative;
`

export const CustomSelectWrapper = styled.div`
  position: relative;
  width: 200px;
`

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border: 4px solid var(--border-color);
  outline: none;
  font-size: var(--fs-main);
  background-color: #59855d63;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii-mini);
  width: 100%;
  box-shadow: var(--shadow);
  position: relative;

  @media (min-width: 767px) {
    width: 200px;
  }
`

export const ArrowIcon = styled.img<{ isOpen: boolean }>`
  width: 20px;
  font-size: 12px;
  margin-left: 5px;
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'rotate(180deg)')};
  transition: transform 0.3s ease;
`

export const OptionsList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  color: black;
  background-color: var(--background-hints);
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  transform-origin: top center;
  transform: scaleY(${({ isOpen }) => (isOpen ? '1' : '0')});
  z-index: 200;
`

export const OptionItem = styled.li`
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`
