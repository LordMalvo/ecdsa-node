import { useEffect, useState } from "react";
import server from "../server";
import "./addresses.css"

const Info = ({sender, recipient, amount}) => {

    const [hash, setHash] = useState("");

    const data = {
        "sender": sender,
        "recipient": recipient,
        "amount": amount
    };

    console.log(JSON.stringify(data))

    useEffect(() => {
        async function fetchData() {
          const res = await server.get(`hash/${JSON.stringify(data)}`);
          setHash(res.data.hash)
        }
        fetchData();
      }, [sender, recipient, amount]);

    return(
        <div className="addresses">
            <h1>Transaction info:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <h1>Hashed transaction info:</h1>
            <h2>{hash}</h2>
        </div>
    )

}

export default Info;