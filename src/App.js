import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GamesContainer from './components/GamesContainer/GamesContainer';
import LogoComponent from './components/LogoComponent/LogoComponent';
import { Spinner } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  async function getGames() {
    setIsLoading(true);
    await axios
      .get(
        `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50&pageNumber=${currentPage}`
      )
      .then((response) => {
        setData(response.data);
        setTotalPages(response.headers['x-total-page-count']);
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
    console.log(number);
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
            totalPages={totalPages}
            handlePagination={handlePagination}
            isLoading={isLoading}
          />
        </>
      )}
    </>
  );
}

export default App;
