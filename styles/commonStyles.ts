import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 90px;
  color: #424242;

  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 550px) {
    padding: 0 30px;
  }
`;

export const PageTitle = styled.h2`
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  font-weight: 700;
  padding: 0;
  margin: 0 0 25px;

  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 40px;
  }

  @media (max-width: 550px) {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 15px;
  }
`;