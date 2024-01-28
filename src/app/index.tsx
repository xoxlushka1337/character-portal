import { Search } from 'features/search'
import React, { useEffect, useState } from 'react'
import { Container } from 'shared/ui'
import styled from 'styled-components'
import { Controls } from 'widgets/conrols'
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
  align-items: center;
  gap: 50px;
`

const ShowFiltersButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: var(--background-accent);
  color: white;
  border: none;
  border-radius: var(--radii);
  cursor: pointer;
`

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 70px;
`

const App: React.FC = () => {
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

export default App
