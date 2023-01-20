import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//regular imports
ReactDOM.render(<App /> , document.getElementById('root'))
if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  })
}
