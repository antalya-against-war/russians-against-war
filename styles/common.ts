import styled, { css } from 'styled-components';

const regularText = css`
  font-size: 18px;
  line-height: 24px;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Container = styled.div`
  width: 1340px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    width: 1024px;
  }

  @media (max-width: 1080px) {
    width: 768px;
  }

  @media (max-width: 820px) {
    margin: 0 20px;
    width: auto;
  }
`;

export const Page = styled.div`
  margin: 40px 0 50px;

  & ul {
    ${regularText};
    
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 767px) {
    margin: 25px 0 35px;
  }
`;

export const PageTitle = styled.h2`
  font-size: 32px;
  line-height: 44px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 15px;

  @media (max-width: 767px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

export const Title = styled.h3<{ inText?: boolean }>`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 15px;

  ${({ inText }) => inText && css`
    margin: 0 0 10px;
  `}

  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

export const Paragraph = styled.p`
  ${regularText};

  padding: 0;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const IFrame = styled.iframe`
  width: 560px;
  height: 315px;
  margin: 20px 0;

  @media (max-width: 599px) {
    width: 335px;
    height: 188px;
    margin: 10px 0;
  }
`;

export const Image = styled.img`
  display: block;
  object-fit: contain;
  object-position: left;
  width: 560px;
  height: 315px;
  margin: 20px 0;

  @media (max-width: 599px) {
    width: 335px;
    height: 188px;
    margin: 10px 0;
  }
`;