import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import { GiSecretBook } from 'react-icons/gi';

export const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [showForm, setShowForm] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author }});
    setTitle('');
    setAuthor('');
  }

  return (
    <section className={!showForm ? "add-book-form invisible" : "add-book-form visible"}>
      <div className="add-book-form__show-button" onClick={() => setShowForm(!showForm)}><GiSecretBook /></div>
      <span>Feed the Bookworm</span>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="book title" value={title}
          onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="author's name" value={author}
          onChange={(e) => setAuthor(e.target.value)} required />
        <input type="submit" value="add book" />
      </form>
    </section>

  );
}
