import styled from 'styled-components';

export const PlayWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 16px auto;
  box-sizing: border-box;
  img {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin: 16px auto;
  font-size: 18px;
  font-weight: bold;
`;

export const Desc = styled.div`
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #000;
  margin: 16px auto;
`;