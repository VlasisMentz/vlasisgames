import React from 'react';
import { useState } from 'react';
import './PaginationComponent.styles.css';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ totalPages, handlePagination }) => {
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
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
      <Pagination>
        <Pagination.Prev />
        {items}
        <Pagination.Prev />
      </Pagination>
    </>
  );
};

export default PaginationComponent;
