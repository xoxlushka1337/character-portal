import { SelectSearch } from 'entities/selectSearch'

interface SearchTypeProps {
  setValueSearch: (value: string) => void
}

const SearchSpecies: React.FC<SearchTypeProps> = ({ setValueSearch }) => {
  const handleSelect = (selectedValue: string) => {
    setValueSearch(selectedValue)
  }
  return <SelectSearch searchKey="species" onSelect={handleSelect} />
}

export default SearchSpecies
