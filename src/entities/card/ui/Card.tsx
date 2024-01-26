import styled from 'styled-components'

const Conteiner = styled.div``

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
}

const Card: React.FC<CardProps> = ({ img, name, gender, status }) => {
  return (
    <Conteiner>
      <Wrapper>
        <Img src={img} alt="404"></Img>
        <Text>
          <Name>{name}</Name>
          <Gender>{gender}</Gender>
          <Status>{status}</Status>
        </Text>
      </Wrapper>
    </Conteiner>
  )
}

export default Card
