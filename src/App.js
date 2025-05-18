import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import SideBar from './components/controls/SideBar';
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const theme = createTheme({
  typography: {
    fontFamily: '"General Sans", sans-serif'
  },

})

function App() {

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   axios.get(`/api`)
  //               .then(response => {
  //                   setData(response.data)
  //               })
  // }, [])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      {/* <p>{!data ? "Loading..." : data}</p> */}
      <Map ></Map>
    </>
  );
}

export default App;
