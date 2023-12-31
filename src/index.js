// Toast
import { Toaster } from 'react-hot-toast';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// Gllobal styles
import { Global } from 'styles/Global.styled';

import { store, persistor } from './redux/store';
import { App } from './components/App.jsx';
import './index.css';

import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <Global />
          <App />
          <Toaster />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
