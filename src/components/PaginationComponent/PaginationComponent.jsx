import React from 'react';
import './PaginationComponent.styles.css';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ handlePagination, active }) => {
  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => handlePagination(number)}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <Pagination className='d-flex justify-content-center'>{items}</Pagination>
    </>
  );
};

export default PaginationComponent;
