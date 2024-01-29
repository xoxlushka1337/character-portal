import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const ShowFiltersButton = styled.button`
  font-size: var(--fs-main);
  padding: 8px 16px;
  width: 150px;
  height: 50px;
  background-color: var(--background-accent);
  color: white;
  border: none;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  letter-spacing: 0.5px;
  cursor: pointer;
`

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 10px 0px;
  width: 100%;
  margin-top: 70px;

  @media (min-width: 512px) {
    flex-direction: row;
    gap: 0px;
  }
`
