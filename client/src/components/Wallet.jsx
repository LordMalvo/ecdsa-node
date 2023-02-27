import server from "../server";
import "./wallets.css";
import { useState } from "react";

const Wallet = ({setAddress, balance, setBalance, addresses}) => {
    const [privateKey, setPrivateKey] = useState("Private key not found");

    const changeBalance = async (event) => {
        const address = event.target.value;
        setAddress(address);
        if(address) {
            const res = await server.get(`balance/${address}`);
            setBalance(res.data.balance);
            const obj = addresses.find((obj) => obj.address === address);
            if(obj !== undefined){
                setPrivateKey(obj.privateKey);
            } else {
                setPrivateKey("Private key not found")
            }
        }
        else {
            setBalance(0);
        }
    }

    return (
        <div className="wallet">
            <h1>Your wallet</h1>
            <div className="target">
                <h3 style={{marginBottom: -5}}>Address:</h3>
                <input onChange={changeBalance}>
                </input>
                <h3 style={{marginBottom: -5}}>Private key:</h3>
                <input disabled value={privateKey}>
                </input>
                <h3>Balance: {balance}</h3>
            </div>
        </div>
    )
}

export default Wallet;