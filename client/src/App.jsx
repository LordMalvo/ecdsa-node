import { useState } from 'react'
import Wallet from './components/Wallet'
import Transfer from './components/Transfer'
import Addresses from './components/Addresses'
import './App.css'
import { useEffect } from 'react'
import server from './server'

function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [addresses, setAddresses] = useState([]);

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
        <Transfer address={address} setBalance={setBalance}></Transfer>
      </div>
      <Addresses addresses={addresses} setAddresses={setAddresses}></Addresses>
    </div>
  )
}

export default App
