import { useEffect, useState } from "react";
import server from "../server";

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const res = await server.get(`info`);
          setAddresses(res.data.balances)
        }
        fetchData();
    }, []);

    return(
        addresses.map(obj => (
            <h2>{obj.address}</h2>
        ))
    )

}

export default Addresses;