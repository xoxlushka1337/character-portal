import React, { useState, useEffect } from 'react'
import { Search } from 'features/search'
import { FilterSelect } from 'features/filterStatus'

interface ControlsProps {
  setFilters: (filters: any) => void
}

const Controls: React.FC<ControlsProps> = ({ setFilters }) => {
  const [valueName, setValueName] = useState<string>('')
  const [valueStatus, setValueStatus] = useState<string>('')

  useEffect(() => {
    const filters: any = {}

    if (valueName) {
      filters.name = valueName
    }

    if (valueStatus) {
      filters.status = valueStatus
    }

    setFilters(filters)
  }, [valueName, setFilters, valueStatus])

  return (
    <div className="">
      <Search valueSearch={valueName} setValueSearch={setValueName} />
      <FilterSelect valueStatus={valueStatus} setValueStatus={setValueStatus} />
    </div>
  )
}

export default Controls
