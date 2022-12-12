import styled from 'styled-components';

export const FeedItemWrapper = styled.div`
  display: flex;
  padding: 15px 0;

  & + & {
    border-top: 1px solid rgba(0,0,0,.2);
  }
`;

export const ItemTime = styled.div`
  margin-right: 40px;
  color: #aaa;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

export const ItemContent = styled.div``;