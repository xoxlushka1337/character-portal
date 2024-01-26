import { Container } from 'shared/ui'
import styled from 'styled-components'

// import rickMortyImage from '../../shared/assets/images/rick_morty.png'

const HeaderEl = styled.header`
  background-color: #71717bd6;
  border-radius: 30px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

// const IconHeader = styled.image``

const Title = styled.a.attrs({
  href: '/',
})`
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const IconHeader = styled.div``

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Find your favorite character</Title>
          <IconHeader></IconHeader>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}
