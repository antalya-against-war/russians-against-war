import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  height: 400px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 300px;
  }
`;

export const BackgroundWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  & img {
    width: 100vw !important;
    height: 400px !important;
  }

  @media (max-width: 1024px) {
    & img {
      height: 300px !important;
    }
  }
`;

export const StandWithUkraine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  padding: 10px;
  background: #FFD700;
  color: #0066CC;

  font-size: 32px;
  line-height: 37px;
  font-weight: 600;
  text-align: center;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
  }

  @media (max-width: 550px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const HeaderCaption = styled.p`
  font-size: 25px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  margin-top: 10px;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media (max-width: 550px) {
    font-size: 20px;
    line-height: 24px;
  }
`;