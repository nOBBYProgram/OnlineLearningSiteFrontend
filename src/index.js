import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchProvider } from './hooks/SearchContext';
import { Provider } from 'react-redux';
import {store,persistor} from './reducer/store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <React.StrictMode>
     <SearchProvider>
    <App />
    </SearchProvider>
  </React.StrictMode>
  </PersistGate>
  </Provider>
);


