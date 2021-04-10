import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style';
import IconFontStyle from './statics/iconfont/iconfont';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IconFontStyle />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
