import React, { useState, useEffect } from 'react'
import { Search } from 'features/search'
import { FilterSelect } from 'features/filterStatus'
import { FilterGender } from 'features/filterGender'

interface ControlsProps {
  setFilters: (filters: any) => void
}

const Controls: React.FC<ControlsProps> = ({ setFilters }) => {
  const [valueName, setValueName] = useState<string>('')
  const [valueStatus, setValueStatus] = useState<string>('')
  const [valueGender, setValueGender] = useState<string>('')

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

    setFilters(filters)
  }, [valueName, setFilters, valueStatus, valueGender])

  return (
    <div className="">
      <Search valueSearch={valueName} setValueSearch={setValueName} />
      <FilterSelect setValueSearch={setValueStatus} />
      <FilterGender setValueSearch={setValueGender} />
    </div>
  )
}

export default Controls
