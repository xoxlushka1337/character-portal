import React, { useState } from 'react'
import { Container } from 'shared/ui'
import styled from 'styled-components'
import { Controls } from 'widgets/conrols'
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
  flex-direction: column;
  align-items: center;
`

const ShowFiltersButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: var(--background-accent);
  color: white;
  border: none;
  border-radius: var(--radii);
  cursor: pointer;
`

const App: React.FC = () => {
  const [filters, setFilters] = useState<ITypeFilters>({})
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <ShowFiltersButton onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
        </ShowFiltersButton>
        {showFilters && (
          <Container>
            <Controls setFilters={setFilters} />
          </Container>
        )}
        <Container>
          <ListCards filters={filters} />
        </Container>
      </Wrapper>
    </div>
  )
}

export default App
