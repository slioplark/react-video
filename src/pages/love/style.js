import styled from 'styled-components';

export const LoveWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  max-width: 1080px;
  margin: 16px auto;
  box-sizing: border-box;
`;

export const LoveItem = styled.div`
  flex: 0 0 calc(25% - 8px);
  margin: 16px 4px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    flex: 0 0 calc(50% - 8px);
  }
  @media only screen and (max-width: 420px) {
    flex: 0 0 calc(100% - 8px);
  }
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
  background-size: cover;
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

export const LoveText = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
  background-color: #212121;
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