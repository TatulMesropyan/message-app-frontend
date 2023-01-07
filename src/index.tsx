import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
//@ts-ignore
  document.getElementById('root') as HTMLElement
);
root.render(<App />
);