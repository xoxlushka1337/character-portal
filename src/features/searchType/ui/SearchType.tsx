import { SelectSearch } from 'entities/selectSearch'
interface SearchTypeProps {
  setValueSearch: (value: string) => void
}

const SearchType: React.FC<SearchTypeProps> = ({ setValueSearch }) => {
  const handleSelect = (selectedValue: string) => {
    setValueSearch(selectedValue)
  }
  return <SelectSearch searchKey="type" onSelect={handleSelect} />
}

export default SearchType
