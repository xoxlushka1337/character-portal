import { Search } from 'features/search'
import React, { useEffect, useState } from 'react'
import { Container } from 'shared/ui'
import { Controls } from 'widgets/controls'
import { Header } from 'widgets/header'
import { ListCards } from 'widgets/listCards'

import { Wrapper, ShowFiltersButton, ContainerFilter } from './homePages.styles'

interface ITypeFilters {
  name?: string
  status?: string
  gender?: string
  type?: string
  species?: string
}

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
