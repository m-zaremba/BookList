import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {BookContext} from '../context/BookContext';
import {WiSunrise, WiSunset} from 'react-icons/wi';

export const Header = () => {

  const {toggleTheme, darkmode} = useContext(ThemeContext);
  const {books} = useContext(BookContext);

  return (
    <header>
      {darkmode ? <WiSunrise onClick={() => toggleTheme()}/> : <WiSunset onClick={() => toggleTheme()}/>}
      <h1>Bookworm list</h1>
      {(books.length === 1) ? <p>Only {books.length} book to finish? You can surely do better!</p>
      :
      (books.length > 1 && books.length <= 5) ? <p>{books.length} books? Still not very challenging...</p>
      :
      (books.length > 5) ? <p>{books.length} on the list? A real bookworm you are!</p>
      :
      <p>Go find yourself a book!</p>}
    </header>
  )
}
