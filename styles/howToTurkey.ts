import styled from 'styled-components';
import { Container as CommonContainer } from './commonStyles';

export const Container = styled(CommonContainer)`
  padding: 0 50px 0 90px;

  @media (max-width: 1024px) {
    padding: 0 30px 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const HandBook = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: 100px;
  margin-bottom: 90px;

  @media (max-width: 1024px) {
    grid-gap: 70px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HandbookContent = styled.div``;

export const Section = styled.section`
  & + & {
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    & + & {
      margin-top: 30px;
    }
  }
`;

export const Heading1 = styled.h3`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin: 0 0 25px 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin: 0 0 15px 0;
  }
`;

export const Heading2 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
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

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const TableOfContent = styled.nav`
  transition: transform .3s;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(-150%);
    height: 100vh;
    width: 100vw;
    background: #fff;
    z-index: 1;
    padding: 30px;

    &.active {
      transform: translateX(0%);
    }
  }
`;

export const TableOfContentTitle = styled.h6`
  display: none;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin: 0 0 25px 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const TableOfContentClose = styled.button`
  display: none;
  position: absolute;
  right: 30px;
  top: 33px;
  width: 30px;
  height: 30px;

  border: 0;
  padding: 0;
  background: transparent;

  @media (max-width: 768px) {
    display: block;
  }
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
    margin-bottom: 5px;
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

  @media (max-width: 768px) {
    & li {
      font-size: 26px;
      line-height: 30px;
    }

    & li a, & li.active > a {
      color: #424242;
      font-weight: 400;
    }
  }
`;

export const ScrollTopButton = styled.a`
  display: none;
  position: fixed;
  right: 100px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  transform: translateY(150%);
  
  transition: transform .3s;

  &.active {
    transform: translateY(0%);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const TableOfContentsButton = styled.button`
  display: none;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;

  border: 0;
  padding: 0;
  background: transparent;

  @media (max-width: 768px) {
    display: block;
  }
`;