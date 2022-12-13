import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 50px;

  @media (max-width: 550px) {
    margin-bottom: 30px;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;