import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './test';

ReactDOM.render(
  <React.StrictMode>
    {/* <MoralisProvider appId="4lR6QXusHHvTwNHq4peChSsolwqA2pCxketN9fvJ" serverUrl="https://y92fayrx42hw.usemoralis.com:2053/server"> */}
      <App />
    {/* </MoralisProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
