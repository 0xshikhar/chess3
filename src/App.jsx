// eslint-disable-next-line
import React, { useState } from 'react';

import '@rainbow-me/rainbowkit/dist/index.css';
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { WalletButton } from "./components/WalletButton";
import Home from "./pages/Home"
// import Header from './components/header'
// import Hero from './components/hero'

/* eslint-disable linebreak-style */

// import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
// import {
//   Switch,
//   Route,
//   Redirect,
// } from 'react-router-dom';

// import IPFS from 'ipfs-core';
// import ChessBoard from './components/Chessboard';
// import MainMenu from './components/MainMenu';
// import NavBar from './components/NavBar';
// import Store from './components/Store';
// import Collection from './components/Collection';
// import Minter from './components/Minter';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App() {
  // const [settings, setSettings] = useState({ vsComputer: false });
  // const [code, setCode] = useState('');
  // const [client, setClient] = useState(); // streamr client
  // const [address, setAddress] = useState('');
  // const [provider, setProvider] = useState();
  // const [ipfs, setIpfs] = useState();
  // useEffect(async () => {
  //   setIpfs(await IPFS.create());
  // }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <WalletButton />
        <div className='underline bg-green-600'>Hello</div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
