import styled from 'styled-components'

const Wrapper = styled.div``

const Img = styled.img``

const Text = styled.div``

const Name = styled.p``

const Gender = styled.p``

const Status = styled.p``

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
      <Img src={img} alt="404"></Img>
      <Text>
        <Name>{name}</Name>
        <Gender>{gender}</Gender>
        <Status>{status}</Status>
        <div className="">{type}</div>
      </Text>
    </Wrapper>
  )
}

export default Card
