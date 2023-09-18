
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
import { StateContextProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.BinanceSmartChainTestnet} activeChain="binance-testnet" clientId="c438c63fe88e9378262bacb810746625">
    <Router>
      <StateContextProvider>
        <App/>
        </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)