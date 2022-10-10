import styled from 'styled-components';

export const Project = styled.div`
  display: block;
  position: relative;
  width: 375px;
  height: 214px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 70%;
  top: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  align-items: center;
  color: #fff;
  background: rgba(46,46,46,.7);
  padding: 10px;

  transition: transform .2s;

  ${Project}:hover & {
    transform: translateY(-100%);
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;

  margin: 0 0 10px;
  padding: 0;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;

  padding: 0;
  margin: 0;
  text-align: center;
`;