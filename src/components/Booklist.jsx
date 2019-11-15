import React, { useContext } from 'react';
import {BookDetails} from './BookDetails';
import {BookContext} from '../context/BookContext';
import {GiLeechingWorm} from 'react-icons/gi';

export const BookList = () => {
  const {books} = useContext(BookContext);
  return (
    <section className="book-list">
      {books.length ?
        <ul>
          {books.map(book => {
            return ( <BookDetails book={book} key={book.id} /> );
          })}
        </ul>
      :
      <div className="empty">
        <GiLeechingWorm />
        <span>Worm is hungry...</span>
      </div>
      }

    </section>
  );
}
