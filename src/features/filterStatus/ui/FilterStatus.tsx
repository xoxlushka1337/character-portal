import { CustomSelect } from 'entities/customSelect'

interface SearchProps {
  valueStatus: string
  setValueStatus: any
}

// Пример использования:
const options = [
  { label: 'Unknown', value: 'Unknown' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Alive', value: 'Alive' },
  { label: 'All', value: 'All' },
]

const FilterSelect: React.FC<SearchProps> = ({
  valueStatus,
  setValueStatus,
}) => {
  const handleSelect = (selectedValue: string) => {
    console.log('Selected value:', selectedValue)
    if (selectedValue !== 'All') {
      setValueStatus(selectedValue)
    } else {
      // Если выбран "All", сбросить значение
      setValueStatus('')
    }
    // Здесь вы можете обработать выбранный вариант
  }

  return (
    <div>
      <CustomSelect options={options} onSelect={handleSelect} />
    </div>
  )
}

export default FilterSelect
