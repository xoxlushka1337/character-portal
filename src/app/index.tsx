import React, { useState } from 'react'
import { Container } from 'shared/ui'
import { Controls } from 'widgets/conrols' // исправлено на 'widgets/controls'
import { Header } from 'widgets/header'
import { ListCards } from 'widgets/listCards'

interface ITypeFilters {
  name?: string
  status?: string
  gender?: string
  type?: string
  species?: string
}

const App: React.FC = () => {
  const [filters, setFilters] = useState<ITypeFilters>({})
  console.log(filters)

  return (
    <div className="App">
      <Header />
      <Container>
        <Controls setFilters={setFilters} />
        {/* Уберите угловые скобки, так как тип уже указан в useState */}
        <ListCards filters={filters} />
      </Container>
    </div>
  )
}

export default App
