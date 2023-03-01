import server from "../server";
import "./wallets.css";
import { useState } from "react";

const Transfer = ({address, setBalance, recipient, setRecipient, amount, setAmount}) => {
    //const [recipient, setRecipient] = useState("");
    //const [amount, setAmount] = useState(0);

    const sendAmount = async () => {
        if(recipient!=="" && amount!==0) {
            await server.post(`transfer`, {
                sender: address,
                recipient: recipient,
                amount: parseInt(amount)
            }).then(function (res) {
                const senderBalance = res.data.balance;
                setBalance(senderBalance);
            }
            ).catch(function (error){
                console.log(error.response.data.message);
            })
        }
    }

    const changeRecipient = (ev) => {
        setRecipient(ev.target.value);
    }

    const changeAmount = (ev) => {
        setAmount(ev.target.value);
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