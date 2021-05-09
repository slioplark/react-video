import styled from 'styled-components'

export const LogInWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 360px;
  margin: 16px auto;
  padding: 16px;
  hr {
    margin: 32px auto;
  }
  button {
    display: block;
    margin: 32px auto;
  }
  .form-controller {
    margin: 32px auto;
  }
`

export const ForgotPwdWrapper = styled.div`
  .text {
    display: block;
    text-align: center;
    cursor: pointer;
  }
`
