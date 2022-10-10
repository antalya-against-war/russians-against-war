import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 70px;

  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media (max-width: 550px) {
    margin-bottom: 30px;
  }
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 10px;
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