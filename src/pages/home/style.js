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
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 60%;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  margin: 16px auto;
  font-size: 14px;
  font-weight: bold;
`;

export const Desc = styled.div`
  display: -webkit-box;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const Time = styled.div`
  position: absolute;
  right: 4px;
  bottom: 4px;
  padding: 4px;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
  background-color: #212121;
`;