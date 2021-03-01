import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

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
        <Route path="/" exact component={Home} />
        <Route path="/love" exact component={Love} />
        <Route path="/play" exact component={Play} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
