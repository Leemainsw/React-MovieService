import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* APP : component, html을 반환 */}
    {/* js + html : JSX */}
    <App />
  </React.StrictMode>,
  document.getElementById('Container')
);
