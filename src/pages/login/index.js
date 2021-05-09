import { useContext } from 'react'

import { UserContext } from '../../store/userContext'
import SignIn from './components/sign-in'
import SignOut from './components/sign-out'

import { LogInWrapper } from './style'

function Login() {
  const { user } = useContext(UserContext)

  return <LogInWrapper>{user ? <SignOut /> : <SignIn />}</LogInWrapper>
}

export default Login
