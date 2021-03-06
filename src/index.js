import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style';
import IconFontStyle from './statics/iconfont/iconfont';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IconFontStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
