import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GamesContainer from './components/GamesContainer/GamesContainer';
import LogoComponent from './components/LogoComponent/LogoComponent';
import { Spinner } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getGames() {
    await axios
      .get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getGames();
  }, []);

  return isLoading ? (
    <>
      <LogoComponent />
      <div className='spinner'>
        <div className='spinner-animation'>
          <Spinner animation='border' variant='warning' />
        </div>
      </div>
    </>
  ) : (
    <>
      <LogoComponent />
      <GamesContainer data={data} />
    </>
  );
}

export default App;
