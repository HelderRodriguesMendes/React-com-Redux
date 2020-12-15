import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import storeConfig from './store/storeConfig'

// Criando a versão do estado para passar pro provider
const store = storeConfig();

ReactDOM.render(
  //o PROVIDER faz a conexao entre o redux com toda a aplicação
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
