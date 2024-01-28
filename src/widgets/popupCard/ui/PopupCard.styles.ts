import styled from 'styled-components'

export const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e5e5e5;
  padding: 20px;
  z-index: 1000;
  border-radius: var(--radii);
  color: black;
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

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`

export const CharterImg = styled.img`
  border-radius: var(--radii);
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
