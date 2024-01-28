// import React from 'react'
// import styled from 'styled-components'
// import { arrow } from 'shared/assets'

// interface SwitchPageProps {
//   onNextPage: () => void
//   onPreviousPage: () => void
// }

// const ArrowButtonNext = styled.img`
//   width: 50px;
//   cursor: pointer;
//   transition: 0.4s;
//   &:hover {
//     transition: 0.4s;
//     transform: scale(1.1);
//   }

//   @media (min-width: 716px) {
//     width: 60px;
//   }
// `

// const ArrowButtonPrevious = styled.img`
//   width: 50px;
//   cursor: pointer;
//   transition: 0.4s;
//   transform: rotate(180deg);

//   &:hover {
//     transition: 0.4s;
//     transform: rotate(180deg) scale(1.1);
//   }

//   @media (min-width: 716px) {
//     width: 60px;
//   }
// `

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 50px;
//   margin-bottom: 50px;
// `

// const SwitchPage: React.FC<SwitchPageProps> = ({
//   onNextPage,
//   onPreviousPage,
// }) => {
//   return (
//     <Container>
//       <ArrowButtonPrevious src={arrow} alt="404" onClick={onPreviousPage} />
//       <ArrowButtonNext src={arrow} alt="404" onClick={onNextPage} />
//     </Container>
//   )
// }

// export default SwitchPage

import React from 'react'
import styled from 'styled-components'
import { arrowRight, arrowLeft } from 'shared/assets'

interface ArrowProps {
  direction: 'left' | 'right'
  disabled: boolean
}

const ArrowButton = styled.img<ArrowProps>`
  width: 50px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: 0.4s;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  &:hover {
    transition: 0.4s;
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.1)')};
  }

  @media (min-width: 716px) {
    width: 60px;
  }
`

interface SwitchPageProps {
  onNextPage: () => void
  onPreviousPage: () => void
  hasNextPage: string | null
  hasPreviousPage: string | null
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
`

const SwitchPage: React.FC<SwitchPageProps> = ({
  onNextPage,
  onPreviousPage,
  hasNextPage,
  hasPreviousPage,
}) => {
  return (
    <Container>
      <ArrowButton
        direction="left"
        src={arrowLeft}
        alt="Previous"
        onClick={onPreviousPage}
        disabled={!hasPreviousPage}
      />
      <ArrowButton
        direction="right"
        src={arrowRight}
        alt="Next"
        onClick={onNextPage}
        disabled={!hasNextPage}
      />
    </Container>
  )
}

export default SwitchPage
