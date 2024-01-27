import { Container } from 'shared/ui'
import styled from 'styled-components'

// import rickMortyImage from '../../shared/assets/images/rick_morty.png'
import { rickMortyImage } from 'shared/assets'

const HeaderEl = styled.header`
  background-color: var(--background);
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  margin-top: 10px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`

const IconHeader = styled.img`
  width: 200px;
`

const Title = styled.div`
  font-size: var(--fs-title);
  text-decoration: none;
  font-weight: var(--fw-bold);
  color: var(--color-text);
`

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Find your favorite character</Title>
          <IconHeader src={rickMortyImage} alt="404" />
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}
