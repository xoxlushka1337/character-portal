import React, { useState, useEffect } from 'react'
import { Search } from 'features/search'
import { FilterSelect } from 'features/filterStatus'
import { FilterGender } from 'features/filterGender'
import { SearchType } from 'features/searchType'
import { SearchSpecies } from 'features/searchSpecies'
import styled from 'styled-components'

interface ControlsProps {
  setValueName: (value: string) => void
  setValueStatus: (value: string) => void
  setValueGender: (value: string) => void
  setValueType: (value: string) => void
  setValueSpecies: (value: string) => void
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  justify-content: space-around;
`

const Controls: React.FC<ControlsProps> = ({
  setValueName,
  setValueStatus,
  setValueGender,
  setValueType,
  setValueSpecies,
}) => {
  return (
    <Container>
      <SearchType setValueSearch={setValueType} />
      <SearchSpecies setValueSearch={setValueSpecies} />
      <FilterGender setValueSearch={setValueGender} />
      <FilterSelect setValueSearch={setValueStatus} />
    </Container>
  )
}

export default Controls
