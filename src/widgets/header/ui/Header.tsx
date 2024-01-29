import { Container } from 'shared/ui'
import styled from 'styled-components'
import { rickMortyImage } from 'shared/assets'

const HeaderEl = styled.header`
  background: var(--background);
  box-shadow: var(--shadow);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconHeader = styled.img`
  width: 100px;

  @media (min-width: 449px) {
    width: 130px;
  }
`

const Title = styled.div`
  font-size: 18px;
  text-decoration: none;
  font-weight: var(--fw-normal);
  color: var(--color-text);
  letter-spacing: 1.15px;

  @media (min-width: 449px) {
    font-size: var(--fs-title);
  }
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
