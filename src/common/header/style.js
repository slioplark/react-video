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
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  margin: auto;
  input {
    width: 566px;
  }
  span {
    margin-right: 4px;
    vertical-align: bottom;
  }
  svg {
    font-size: 24px;
  }
`;