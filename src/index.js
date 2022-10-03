import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router} from 'react-router-dom';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config })

// export default theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider resetCSS='true' theme={theme}>
    <React.StrictMode>
    <Router>

      <App />
    </Router>

    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
