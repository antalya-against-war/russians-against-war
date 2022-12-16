import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Item = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 25px;

  font-weight: 700;
  font-size: 18px;
  font-style: normal;

  text-decoration: none;
  color: #242424;

  transition: background-color 200ms;

  &:hover {
    background-color: rgba(8,140,232,.3);
  }
`;