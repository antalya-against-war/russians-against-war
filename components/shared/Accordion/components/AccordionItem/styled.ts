import styled, { css, keyframes } from 'styled-components';

export const openAnimation = keyframes`
  0% {
    margin-top: 0;
    height: 0;
    opacity: 0;
  }
  80% {
    margin-top: 15px;
    height: auto;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AccordionItemWrapper = styled.div`
  padding: 25px 0;

  & + & {
    border-top: 1px solid rgba(0,0,0,.2);
  }

  @media (max-width: 767px) {
    padding: 15px 0;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Question = styled.p`
  margin: 0;
  margin-left: 65px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  user-select: none;

  @media (max-width: 767px) {
    margin-left: 45px;
  }
`

export const ItemContent = styled.div<{ opened: boolean }>`
  margin-top: 0;
  margin-left: 65px;

  overflow: hidden;

  height: 0;
  opacity: 0;

  ${({ opened }) => opened && css`
    animation: ${openAnimation} 200ms forwards;
    margin-top: 15px;
    height: auto;
  `}

  @media (max-width: 767px) {
    margin-left: 45px;
  }
`;