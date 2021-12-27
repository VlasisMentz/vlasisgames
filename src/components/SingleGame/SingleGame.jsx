import React from 'react';
import './SingleGame.styles.css';
import { Col, Card } from 'react-bootstrap';
const SingleGame = ({ game }) => {
  return (
    <>
      <Col>
        <Card className='card-game'>
          <Card.Img
            variant='top'
            className='game-image'
            src={game.thumb}
            alt='movieimage'
          />
          <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            <Card.Text>{game.steamRatingPercent} %</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleGame;
