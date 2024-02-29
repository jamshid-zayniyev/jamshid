import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Providers } from './redux/provider';
// import App from './App';

const App = lazy(()=>import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Suspense fallback={<h1>Loading...</h1>}>
  <Providers>
    <App />
  </Providers>
  </Suspense>
  </React.StrictMode>
);



