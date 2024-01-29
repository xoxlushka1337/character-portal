import { CustomSelect } from 'entities/customSelect'

interface SearchProps {
  setValueSearch: any
}

const options = [
  { label: 'Unknown', value: 'Unknown' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Alive', value: 'Alive' },
  { label: 'All', value: 'All' },
]

const FilterStatus: React.FC<SearchProps> = ({ setValueSearch }) => {
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
      <CustomSelect name="Status" options={options} onSelect={handleSelect} />
    </div>
  )
}

export default FilterStatus
