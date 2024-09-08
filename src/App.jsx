import React from 'react';
import WalletConnect from './components/WalletConnect';
import './index.css'; // Combined styles from both sets

const App = () => {
  return (
    <div className="App">
      <h1>Connect Your Wallet</h1>
      <WalletConnect />
    </div>
  );
};

export default App;
