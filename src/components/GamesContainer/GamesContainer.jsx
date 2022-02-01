import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleGame from '../SingleGame/SingleGame';
import './GamesContainer.styles.css';
import PaginationComponent from '../PaginationComponent/PaginationComponent';

const GamesContainer = ({ data, handlePagination, active }) => {
  const games = data;
  return (
    <>
      <div className='big-container'>
        <Container className='games-container'>
          <Row xs={1} md={2} lg={5}>
            {games.map((game) => (
              <SingleGame key={game.gameID} game={game} />
            ))}
          </Row>
        </Container>
        <PaginationComponent
          handlePagination={handlePagination}
          active={active}
        />
      </div>
    </>
  );
};

export default GamesContainer;
