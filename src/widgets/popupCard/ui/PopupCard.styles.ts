import styled from 'styled-components'

export const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e5e5e5;
  padding: 35px 20px 0;
  z-index: 1000;
  border-radius: var(--radii);
  color: black;
  width: 100%;

  @media (min-width: 460px) {
    width: 429px;
    padding: 35px;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const CloseButton = styled.img`
  position: absolute;
  top: 10px;
  right: 13px;
  cursor: pointer;
  width: 30px;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
`

export const CharterImg = styled.img`
  border-radius: var(--radii);
  width: 100%;
`

export const Name = styled.h2`
  text-align: center;
`

export const InfoItem = styled.p`
  font-size: var(--fs-subtitle);

  b {
    margin-right: 4px;
  }
`
