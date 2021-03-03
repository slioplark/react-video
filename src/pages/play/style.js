import styled from 'styled-components';

export const PlayWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 16px auto;
  padding: 0 4px;
  box-sizing: border-box;
  img {
    width: 100%;
  }
  .video-js {
    width: 100%;
    height: 540px;
    @media only screen and (max-width: 420px) {
      height: 250px;
    }
  }
`;

export const Ad = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  height: 540px;
  color: #fff;
  background-color: #000;
  font-size: 24px;
  @media only screen and (max-width: 420px) {
    height: 250px;
  }
  button {
    margin: 10px;
    padding: 10px;
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