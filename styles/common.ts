import styled from 'styled-components';

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