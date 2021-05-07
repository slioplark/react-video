import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'

import Header from './common/header'
import Home from './pages/home'
import Love from './pages/love'
import Play from './pages/play'
import Login from './pages/login'
import SignUp from './pages/sign-up'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/react-video" exact component={Home} />
        <Route path="/react-video/love" exact component={Love} />
        <Route path="/react-video/play/:id" exact component={Play} />
        <Route path="/react-video/login" exact component={Login} />
        <Route path="/react-video/signUp" exact component={SignUp} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
