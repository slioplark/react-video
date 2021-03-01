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
  margin: 20px auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Img = styled.div`
  width: 100%;
  padding-bottom: 60%;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  margin: 4px auto;
  font-size: 14px;
  font-weight: bold;
`;