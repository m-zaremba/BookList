import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { GiRead } from "react-icons/gi";

export const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{ book.title }</div>
      <div className="author">{ book.author }</div>
      {isMobile ? <GiRead /> : null}
    </li>
  );
}
