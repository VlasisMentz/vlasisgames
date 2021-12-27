import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GamesContainer from './components/GamesContainer/GamesContainer';

function App() {
  const [data, setData] = useState([]);

  async function getGames() {
    await axios
      .get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
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
      <GamesContainer data={data} />
      {/* {data.map((game) => {
        <h1>hello</h1>;
        <h2>{game.title}</h2>;
      })} */}
    </>
  );
}

export default App;
