import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
