import React from 'react';
import './SingleGame.styles.css';
import { Col, Card, Image } from 'react-bootstrap';
const SingleGame = ({ game }) => {
  function handleClick(game) {
    window.open(`https://www.cheapshark.com/redirect?dealID=${game.dealID}`);
  }

  return (
    <>
      <Col className='card-cols'>
        <Card className='card-game' onClick={() => handleClick(game)}>
          <Image className='game-image' src={game.thumb} />
          {/* <Card.Img
            // rounded
            as={Image}
            variant='top'
            className='game-image'
            src={game.thumb}
            alt='movieimage'
          /> */}
          <Card.Body className='d-flex flex-column'>
            <Card.Title className='title'>{game.title}</Card.Title>
            <div className='mt-auto'>
              <h6 className='rating'>{game.steamRatingPercent} %</h6>
              <h6>
                <span className='price'> {game.salePrice}</span> from{' '}
                <span className='old-price'>{game.normalPrice}</span>
              </h6>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleGame;
