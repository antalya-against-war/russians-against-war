import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 1340px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    width: 1024px;
  }

  @media (max-width: 1080px) {
    width: 768px;
  }
`;

export const Page = styled.div`
  margin: 40px 0 50px;
`;

export const PageTitle = styled.h2`
  font-size: 32px;
  line-height: 44px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 15px;
`;

export const Title = styled.h3<{ inText?: boolean }>`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 15px;

  ${({ inText }) => inText && css`
    margin: 0 0 10px;
  `}
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 24px;
  padding: 0;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;