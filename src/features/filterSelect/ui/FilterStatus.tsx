import { CustomSelect } from 'entities/customSelect'

// Пример использования:
const options = [
  { label: 'Unknown', value: 'Unknown' },
  { label: 'Male', value: 'Male' },
  { label: 'Dead', value: 'Dead' },
  { label: 'Alive', value: 'Alive' },
  { label: 'All', value: 'All' },
]

const FilterSelect = () => {
  const handleSelect = (selectedValue: string) => {
    console.log('Selected value:', selectedValue)
    // Здесь вы можете обработать выбранный вариант
  }

  return (
    <div>
      <CustomSelect options={options} onSelect={handleSelect} />
    </div>
  )
}

export default FilterSelect
