import { useState } from 'react'
import Wallet from './components/Wallet'
import Transfer from './components/Transfer'
import Addresses from './components/Addresses'
import './App.css'

function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);

  return (
    <div>
      <div className="app">
        <Wallet balance={balance} setBalance={setBalance} setAddress={setAddress}></Wallet>
        <Transfer address={address} setBalance={setBalance}></Transfer>
      </div>
      <Addresses></Addresses>
    </div>
  )
}

export default App
