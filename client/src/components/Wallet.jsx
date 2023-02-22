import server from "../server";
import "./wallets.css";
import { useState } from "react";

const Wallet = () => {
    const [balance, setBalance] = useState(0);

    const changeBalance = async (event) => {
        const address = event.target.value;
        console.log(address)
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
                <h3>Address:</h3>
                <input onChange={changeBalance}>
                </input>
                <h3 className="balance">Balance: {balance}</h3>
            </div>
        </div>
    )
}

export default Wallet;