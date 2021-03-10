import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  .iconfont {
    font-size: 24px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  margin: auto;
`;

export const Search = styled.input`
  width: 566px;
  height: 26px;
}
`;