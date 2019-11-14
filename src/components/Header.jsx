import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {BookContext} from '../context/BookContext';
import {FaCog} from 'react-icons/fa';

export const Header = () => {
  const {toggleTheme} = useContext(ThemeContext);
  const {books} = useContext(BookContext);
  return (
    <div>
      <FaCog onClick={() => toggleTheme()}/>
      <h1>Your Books to Read List</h1>
      {(books.length > 0) ? <p>Only {books.length} books to finish? You can surely do better!</p> : <p>Go find yourself a book!</p>}
    </div>
  )
}
