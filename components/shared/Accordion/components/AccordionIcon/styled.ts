import styled, { css } from 'styled-components';

export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
`;

export const LineMinus = styled.div`
  width: 100%;
  height: 2px;
  background-color: #424242;

  position: absolute;
  top: calc(50%);

  transition: transform 200ms;
  transform-origin: center;
`

export const LinePlus = styled(LineMinus)<{ opened: boolean }>`
  transform: rotate(90deg);

  ${({ opened }) => opened && css`
    transform: rotate(0deg);
  `}
`;