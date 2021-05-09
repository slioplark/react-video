import { createContext, useReducer } from 'react'

import db from '../db'
import userReducer from './userReducer'

export const UserContext = createContext()

function UserContextProvider(props) {
  const [user, dispatch] = useReducer(userReducer)

  db.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({ type: 'LOG_IN', user: user })
    } else {
      dispatch({ type: 'LOG_OUT' })
    }
  })

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
