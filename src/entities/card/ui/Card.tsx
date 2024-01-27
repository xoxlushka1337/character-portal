import styled from 'styled-components'

const Wrapper = styled.div`
  width: 240px;
  height: 330px;
  background-color: var(--background-accent);
  border-radius: var(--radii);
  text-align: center;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(0.94);
    transition: 0.4s;
  }
`

const Img = styled.img`
  width: 100%;
  height: 212px;
  object-fit: cover;
  border-radius: var(--radii);
`

const Text = styled.div``

const Name = styled.h2`
  font-weight: var(--fw-normal);
  font-size: var(--fs-subtitle);
`

const Gender = styled.p`
  margin: 6px 0;
`

const Status = styled.p`
  margin: 0;
`

interface CardProps {
  img: string
  name: string
  gender: string
  status: string
  type: string
}

const Card: React.FC<CardProps> = ({ img, name, gender, status, type }) => {
  return (
    <Wrapper>
      <Img src={img} alt="404" />
      <Text>
        <Name>{name}</Name>
        <Gender>Gender: {gender}</Gender>
        <Status>Status: {status}</Status>
      </Text>
    </Wrapper>
  )
}

export default Card
