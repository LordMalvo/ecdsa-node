import { useState } from 'react'
import Wallet from './components/Wallet'
import Transfer from './components/Transfer'
import './App.css'

function App() {
  const [address, setAddress] = useState("");
  return (
    <div className="app">
      <Wallet setAddress={setAddress}></Wallet>
      <Transfer address={address}></Transfer>
    </div>
  )
}

export default App
