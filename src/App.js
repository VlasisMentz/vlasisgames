import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GamesContainer from './components/GamesContainer/GamesContainer';
import LogoComponent from './components/LogoComponent/LogoComponent';
import { Spinner } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(1);

  async function getGames() {
    setIsLoading(true);
    await axios
      .get(
        `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50&pageNumber=${currentPage}`
      )
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
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePagination = (number) => {
    setCurrentPage(number);
    setActive(number);
  };
  return (
    <>
      {isLoading ? (
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
          <GamesContainer
            data={data}
            handlePagination={handlePagination}
            isLoading={isLoading}
            active={active}
          />
        </>
      )}
    </>
  );
}

export default App;
