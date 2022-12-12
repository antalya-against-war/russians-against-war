import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 50px;

  @media (max-width: 550px) {
    margin-bottom: 30px;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;