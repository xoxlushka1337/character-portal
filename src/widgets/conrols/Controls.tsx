import React, { useState, useEffect } from 'react'
import { Search } from 'features/search'
import { FilterSelect } from 'features/filterStatus'
import { FilterGender } from 'features/filterGender'
import { SearchType } from 'features/searchType'
import { SearchSpecies } from 'features/searchSpecies'
import styled from 'styled-components'

interface ControlsProps {
  setFilters: (filters: any) => void
}

const Container = styled.div`
  /* display: flex;
  justify-content: space-between; */
`

const Controls: React.FC<ControlsProps> = ({ setFilters }) => {
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
    <Container>
      <Search valueSearch={valueName} setValueSearch={setValueName} />
      <FilterSelect setValueSearch={setValueStatus} />
      <FilterGender setValueSearch={setValueGender} />
      <SearchType setValueSearch={setValueType} />
      <SearchSpecies setValueSearch={setValueSpecies} />
    </Container>
  )
}

export default Controls
