import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GamesContainer from './components/GamesContainer/GamesContainer';
import LogoComponent from './components/LogoComponent/LogoComponent';

function App() {
  const [data, setData] = useState([]);

  async function getGames() {
    await axios
      .get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <NavbarComponent />
      <LogoComponent />
      <GamesContainer data={data} />
    </>
  );
}

export default App;
