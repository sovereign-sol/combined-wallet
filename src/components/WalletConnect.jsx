import React, { useState } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

const WalletConnect = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const { connect, publicKey } = useWallet();

  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new BackpackWalletAdapter(),
  ];

  const handleConnect = async () => {
    try {
      await connect();
      setWalletConnected(true);
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  return (
    <div className="wallet-connect-container">
      {!walletConnected ? (
        <button className="stake-button" onClick={handleConnect}>
          Connect Wallet
        </button>
      ) : (
        <p>Wallet Connected: {publicKey?.toBase58()}</p>
      )}
    </div>
  );
};

export default function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = clusterApiUrl(network);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletConnect />
      </WalletProvider>
    </ConnectionProvider>
  );
}
