import React, { useState } from 'react'
import {
  CustomSelectWrapper,
  SelectHeader,
  OptionsList,
  OptionItem,
} from './CustomSelect.styles'

type Option = {
  label: string
  value: string
}

type CustomSelectProps = {
  name: string
  options: Option[]
  onSelect: (selectedOption: string) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(name)

  const handleOptionClick = (value: string) => {
    setSelectedOption(value)
    onSelect(value)
    setIsOpen(false)
  }

  const toggleSelect = () => {
    setIsOpen(!isOpen)
  }

  return (
    <CustomSelectWrapper>
      <SelectHeader onClick={toggleSelect}>{`${selectedOption}`}</SelectHeader>
      <OptionsList isOpen={isOpen}>
        {options.map((option) => (
          <OptionItem
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </OptionItem>
        ))}
      </OptionsList>
    </CustomSelectWrapper>
  )
}

export default CustomSelect
