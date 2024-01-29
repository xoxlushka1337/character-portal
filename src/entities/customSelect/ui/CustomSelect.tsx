import React, { useState } from 'react'
import {
  CustomSelectContainer,
  CustomSelectWrapper,
  SelectHeader,
  OptionsList,
  OptionItem,
  ArrowIcon,
} from './CustomSelect.styles'

import { arrowTop } from 'shared/assets'

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
  const [isOpen, setIsOpen] = useState<boolean>(false)
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
    <CustomSelectContainer>
      <CustomSelectWrapper>
        <SelectHeader onClick={toggleSelect}>
          {`${selectedOption}`}
          <ArrowIcon src={arrowTop} alt="404" isOpen={isOpen} />
        </SelectHeader>
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
    </CustomSelectContainer>
  )
}

export default CustomSelect
