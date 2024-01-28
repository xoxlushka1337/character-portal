import React from 'react'
import styled from 'styled-components'
import { arrow } from 'shared/assets'

interface SwitchPageProps {
  onNextPage: () => void
  onPreviousPage: () => void
}

const ArrowButtonNext = styled.img`
  width: 50px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transition: 0.4s;
    transform: scale(1.1);
  }
`

const ArrowButtonPrevious = styled.img`
  width: 50px;
  cursor: pointer;
  transition: 0.4s;
  transform: rotate(180deg);

  &:hover {
    transition: 0.4s;
    transform: rotate(180deg) scale(1.1);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`

const SwitchPage: React.FC<SwitchPageProps> = ({
  onNextPage,
  onPreviousPage,
}) => (
  <Container>
    <ArrowButtonPrevious src={arrow} alt="404" onClick={onPreviousPage} />
    <ArrowButtonNext src={arrow} alt="404" onClick={onNextPage} />
  </Container>
)

export default SwitchPage
