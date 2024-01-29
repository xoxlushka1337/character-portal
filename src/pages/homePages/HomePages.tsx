import { Search } from 'features/search'
import React, { useEffect, useState } from 'react'
import { Container } from 'shared/ui'
import styled from 'styled-components'
import { Controls } from 'widgets/controls'
import { Header } from 'widgets/header'
import { ListCards } from 'widgets/listCards'

interface ITypeFilters {
  name?: string
  status?: string
  gender?: string
  type?: string
  species?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const ShowFiltersButton = styled.button`
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

const ContainerFilter = styled.div`
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

const HomePages = () => {
  const [filters, setFilters] = useState<ITypeFilters>({})
  const [showFilters, setShowFilters] = useState(false)

  const [valueName, setValueName] = useState<string>('')
  const [valueStatus, setValueStatus] = useState<string>('')
  const [valueGender, setValueGender] = useState<string>('')
  const [valueType, setValueType] = useState<string>('')
  const [valueSpecies, setValueSpecies] = useState<string>('')

  useEffect(() => {
    const filters = {
      ...(valueName && { name: valueName }),
      ...(valueStatus && { status: valueStatus }),
      ...(valueGender && { gender: valueGender }),
      ...(valueType && { type: valueType }),
      ...(valueSpecies && { species: valueSpecies }),
    }

    setFilters(filters)
  }, [valueName, setFilters, valueStatus, valueGender, valueType, valueSpecies])

  return (
    <div className="App">
      <Header />
      <Container>
        <Wrapper>
          <ContainerFilter>
            <Search valueSearch={valueName} setValueSearch={setValueName} />
            <ShowFiltersButton onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? 'Hide filters' : 'Show filters'}
            </ShowFiltersButton>
          </ContainerFilter>
          {showFilters && (
            <Controls
              setValueName={setValueName}
              setValueStatus={setValueStatus}
              setValueGender={setValueGender}
              setValueType={setValueType}
              setValueSpecies={setValueSpecies}
            />
          )}
          <ListCards filters={filters} />
        </Wrapper>
      </Container>
    </div>
  )
}

export default HomePages
