import React, {useEffect, useState} from "react";

const NdepPortal = ({
                        runningRemotely
                    }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(sessionStorage.getItem('access_token'));
    }, []);

    return (
        <div>
            {!runningRemotely && (
                <div style={{
                    margin: "10px",
                    padding: "10px",
                    textAlign: "center",
                    backgroundColor: "red"
                }}>
                    <span>Nuance NDEP Portal Title</span>
                </div>
            )}
            <div style={{
                margin: "10px",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "cyan"
            }}>
                <h1>NDEP Portal v2</h1>
                <h2>token is ${token}</h2>
            </div>
        </div>
    )
}

export default NdepPortal;

