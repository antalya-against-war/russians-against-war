import styled from 'styled-components';

export const FeedItemWrapper = styled.div`
  display: flex;
  padding: 15px 0;

  & + & {
    border-top: 1px solid rgba(0,0,0,.2);
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ItemTime = styled.div`
  margin-right: 40px;
  color: #aaa;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ItemContent = styled.div``;