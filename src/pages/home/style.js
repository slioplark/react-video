import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  margin: 16px auto;
  box-sizing: border-box;
`;

export const HomeItem = styled.div`
  flex: 0 0 24%;
  margin: 40px auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  margin: 4px auto;
  font-size: 14px;
  font-weight: bold;
`;