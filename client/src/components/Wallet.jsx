import server from "../server";
import "./wallets.css";
import { useState } from "react";

const Wallet = ({setAddress, balance, setBalance}) => {

    const changeBalance = async (event) => {
        const address = event.target.value;
        setAddress(address);
        if(address) {
            const res = await server.get(`balance/${address}`);
            setBalance(res.data.balance);
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
                <h3>Balance: {balance}</h3>
            </div>
        </div>
    )
}

export default Wallet;