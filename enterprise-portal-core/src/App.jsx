import React, {Suspense, useEffect, useState} from "react";
import {AppBar, Box, Typography, Tabs, Tab} from "@material-ui/core";
const ClientPortal = React.lazy(() => import("ncp/ClientPortal.jsx"));
const NdepPortal = React.lazy(() => import("ndep/NdepPortal.jsx"));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}


const App = () => {
    const [value, setValue] = useState(0);
    const [token, setToken] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const temp = Math.random();
        setToken(temp);
        sessionStorage.setItem('access_token', Math.random())
    }, []);

    return (
      <div>
        <div style={{
          margin:"10px",
          padding:"10px",
          textAlign:"center",
          backgroundColor:"greenyellow"
        }}>
          <h1>Enterprise Portal</h1>
        </div>
          <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Client Portal" />
                  <Tab label="NDEP Portal" />
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
              <Suspense fallback={"loading..."}>
                  <ClientPortal/>
              </Suspense>
          </TabPanel>
          <TabPanel value={value} index={1}>
              <Suspense fallback={"loading..."}>
                  <NdepPortal runningRemotely={true}/>
              </Suspense>
          </TabPanel>

      </div>
  )
}


export default App;
