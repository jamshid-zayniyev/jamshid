import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Providers } from './redux/provider';
// import App from './App';

const App = lazy(()=>import('./App'))
const Loader = lazy(()=>import('./components/Loader'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Suspense fallback={<Loader/>}>
  <Providers>
    <App />
  </Providers>
  </Suspense>
  </React.StrictMode>
);



