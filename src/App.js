import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
import UserContextProvider from './store/userContext'

import Header from './common/header'
import Home from './pages/home'
import Love from './pages/love'
import Play from './pages/play'
import Login from './pages/login'
import Verify from './pages/verify'
import SignUp from './pages/sign-up'

function App() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Route path="/react-video" exact component={Home} />
          <Route path="/react-video/love" exact component={Love} />
          <Route path="/react-video/play/:id" exact component={Play} />
          <Route path="/react-video/login" exact component={Login} />
          <Route path="/react-video/verify" exact component={Verify} />
          <Route path="/react-video/signUp" exact component={SignUp} />
        </BrowserRouter>
      </UserContextProvider>
    </Provider>
  )
}

export default App
