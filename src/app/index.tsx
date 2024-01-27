import React, { useState } from 'react'
import { Container } from 'shared/ui'
import styled from 'styled-components'
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const App: React.FC = () => {
  const [filters, setFilters] = useState<ITypeFilters>({})
  console.log(filters)

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Container>
          <ListCards filters={filters} />
        </Container>
        <Controls setFilters={setFilters} />
      </Wrapper>
    </div>
  )
}

export default App
