import { useEffect, useState } from "react";
import server from "../server";
import "./addresses.css"

const Addresses = ({addresses, setAddresses}) => {
    return(
        <div className="addresses">
            <h1>Addresses generated:</h1>
            { addresses ?
                addresses.map(obj => (
                    <h2>{obj.address}</h2>
                ))
                :
                <h2>Loading...</h2>
            }
        </div>
    )

}

export default Addresses;