import React, {useState, useEffect} from "react";

const ClientPortal = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(sessionStorage.getItem('access_token'));
    }, []);

  return (
      <div style={{
        margin: "10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"cyan"
      }}>
        <h1>Client Portal</h1>
        <h2>token is ${token}</h2>
      </div>
  )
}

export default ClientPortal;

