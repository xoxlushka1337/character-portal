import { Container } from 'shared/ui'
import styled from 'styled-components'

// import rickMortyImage from '../../shared/assets/images/rick_morty.png'
import { rickMortyImage } from 'shared/assets'

const HeaderEl = styled.header`
  background: var(--background);
  /* border-radius: var(--radii); */
  box-shadow: var(--shadow);
  /* margin-top: 10px; */
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconHeader = styled.img`
  width: 150px;
`

const Title = styled.div`
  font-size: var(--fs-title);
  text-decoration: none;
  font-weight: var(--fw-normal);
  color: var(--color-text);
  letter-spacing: 1.15px;
`

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Find your favorite character...</Title>
          <IconHeader src={rickMortyImage} alt="404" />
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}
