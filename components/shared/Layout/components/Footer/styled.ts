import styled from 'styled-components';

export const Wrapper = styled.footer`
  background: rgba(217,217,217,.5);
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  padding: 30px 0;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  margin-right: 100px;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-right: 0;

    &:not(:first-child) {
      margin-top: 25px;
    }
  }
`;

export const SectionTitle = styled.p`
  color: #424242;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
`;

export const SectionLink = styled.a`
  display: block;
  color: rgba(36,36,36,.7);
  font-size: 14px;
  padding: 5px 0;
  text-decoration: none;

  &:hover {
    color: #242424;
  }
`;