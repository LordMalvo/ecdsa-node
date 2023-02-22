import server from "../server";
import "./wallets.css";
import { useState } from "react";

const Transfer = ({address}) => {
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState(0);

    const sendAmount = async () => {
        if(recipient && amount) {
            await server.post(`send`, {
                sender: address,
                recipient: recipient,
                amount: parseInt(amount)
            });
            
        }
    }

    const changeRecipient = (ev) => {
        setRecipient(ev.targe.value);
    }

    const changeAmount = (ev) => {
        setAmount(ev.targe.value);
    }

    return (
        <div className="wallet">
            <h1>Transfer</h1>
            <div className="target">
                <h3 style={{marginBottom: -5}}>Recipient:</h3>
                <input onChange={changeRecipient}>
                </input>
                <h3 style={{marginBottom: -5}}>Amount:</h3>
                <input onChange={changeAmount}>
                </input>
                <input type="button" value={"Send"} className="sendButton" onClick={sendAmount}>
                </input>
            </div>
        </div>
    )
}

export default Transfer;