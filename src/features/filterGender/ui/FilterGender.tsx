import { CustomSelect } from 'entities/customSelect'

interface SearchProps {
  setValueSearch: any
}

const options = [
  { label: 'Unknown', value: 'Unknown' },
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Genderless', value: 'Genderless' },
  { label: 'All', value: 'All' },
]

const FilterGender: React.FC<SearchProps> = ({ setValueSearch }) => {
  const handleSelect = (selectedValue: string) => {
    console.log('Selected value:', selectedValue)
    if (selectedValue !== 'All') {
      setValueSearch(selectedValue)
    } else {
      setValueSearch('')
    }
  }

  return (
    <div>
      <CustomSelect name="Gender" options={options} onSelect={handleSelect} />
    </div>
  )
}

export default FilterGender
