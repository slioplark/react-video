import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import store from './store';

import Header from './common/header';
import Home from './pages/home';
import Love from './pages/love';
import Play from './pages/play';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/react-video" exact component={Home} />
        <Route path="/react-video/love" exact component={Love} />
        <Route path="/react-video/play/:id" exact component={Play} />
        <Route path="*">
          <Redirect to="/react-video" />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
