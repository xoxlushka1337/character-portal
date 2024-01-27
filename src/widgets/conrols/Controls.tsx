import React, { useState, useEffect } from 'react'
import { Search } from 'features/search'

interface ControlsProps {
  setFilters: (filters: any) => void
}

const Controls: React.FC<ControlsProps> = ({ setFilters }) => {
  const [valueName, setValueName] = useState<string>('')

  useEffect(() => {
    const filters: any = {}

    if (valueName) {
      filters.name = valueName
    }

    setFilters(filters)
  }, [valueName, setFilters])

  return (
    <div className="">
      <Search valueSearch={valueName} setValueSearch={setValueName} />
    </div>
  )
}

export default Controls
