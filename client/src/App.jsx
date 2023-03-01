import { useState } from 'react'
import Wallet from './components/Wallet'
import Transfer from './components/Transfer'
import Addresses from './components/Addresses'
import './App.css'
import { useEffect } from 'react'
import server from './server'
import Info from './components/Info'

function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await server.get(`info`);
      setAddresses(res.data.balances)
    }
    fetchData();
  });

  return (
    <div>
      <div className="app">
        <Wallet balance={balance} setBalance={setBalance} setAddress={setAddress} addresses={addresses}></Wallet>
        <Transfer amount={amount} setAmount={setAmount} recipient={recipient} setRecipient={setRecipient} address={address} setBalance={setBalance}></Transfer>
      </div>
      <div className="info">
        <Addresses addresses={addresses} setAddresses={setAddresses}></Addresses>
        <Info sender={address} recipient={recipient} amount={amount}></Info>
      </div>
    </div>
  )
}

export default App
