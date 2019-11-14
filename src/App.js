import React from 'react';
import {BookContextProvider} from './context/BookContext';
import {Header} from './components/Header';
import {BookList} from './components/Booklist';
import {NewBookForm} from './components/NewBookForm';


const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Header />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
