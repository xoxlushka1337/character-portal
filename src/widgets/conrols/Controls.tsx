import React, { useState, useEffect } from 'react'
import { Search } from 'features/search'
import { FilterSelect } from 'features/filterStatus'
import { FilterGender } from 'features/filterGender'
import { SearchType } from 'features/searchType'
import { SearchSpecies } from 'features/searchSpecies'

interface ControlsProps {
  setFilters: (filters: any) => void
}

const Controls: React.FC<ControlsProps> = ({ setFilters }) => {
  const [valueName, setValueName] = useState<string>('')
  const [valueStatus, setValueStatus] = useState<string>('')
  const [valueGender, setValueGender] = useState<string>('')
  const [valueType, setValueType] = useState<string>('')
  const [valueSpecies, setValueSpecies] = useState<string>('')

  useEffect(() => {
    const filters: any = {}

    if (valueName) {
      filters.name = valueName
    }

    if (valueStatus) {
      filters.status = valueStatus
    }

    if (valueGender) {
      filters.gender = valueGender
    }

    if (valueType) {
      filters.type = valueType
    }
    if (valueSpecies) {
      filters.species = valueSpecies
    }

    setFilters(filters)
  }, [valueName, setFilters, valueStatus, valueGender, valueType, valueSpecies])

  return (
    <div className="">
      <Search valueSearch={valueName} setValueSearch={setValueName} />
      <FilterSelect setValueSearch={setValueStatus} />
      <FilterGender setValueSearch={setValueGender} />
      <SearchType setValueSearch={setValueType} />
      <SearchSpecies setValueSearch={setValueSpecies} />
    </div>
  )
}

export default Controls
