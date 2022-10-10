import styled from 'styled-components';
import { Container as CommonContainer } from './commonStyles';

export const Container = styled(CommonContainer)`
  padding: 0 50px 0 90px;
`;

export const HandBook = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: 100px;
  margin-bottom: 90px;
`;

export const HandbookContent = styled.div`
  margin-right: 100px;
`;

export const Section = styled.section`
  & + & {
    margin-top: 40px;
  }
`;

export const Heading1 = styled.h3`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin: 0 0 25px 0;
`;

export const Heading2 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  margin: 0 0 10px 0;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  margin: 0 0 10px 0;

  & + & {
    margin: 10px 0 0 0;
  }
`;

export const SubSection = styled.section`
  margin-top: 30px;
`;

export const TableOfContent = styled.nav`
`;

export const TableOfContentList = styled.ul`
  position: sticky;
  top: 20px;
  list-style: none;
  padding-left: 0;

  & li {
    font-size: 20px;
    line-height: 23px;
  }

  & li:not(:last-child) {
    font-size: 20px;
    line-height: 23px;
  }

  & li a {
    text-decoration: none;
    color: #ccc;
    transition: color 100ms ease-in-out;
  }

  & li a:hover,
  & li a:focus {
    color: #666;
  }

  & li.active > a {
    color: #424242;
    font-weight: 600;
  }

  & li ul {
    list-style: none;
    padding-left: 20px;
  }
`;
