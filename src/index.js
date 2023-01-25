/* eslint-disable import/no-import-module-exports */
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
);

//  regular imports
ReactDOM.render(<App />, document.getElementById('root'));
if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
