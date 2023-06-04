import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/books')
        .then(response => {
          setBooks(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        })
  }, []);

  return (
      <div>
        <h1>Book List</h1>
        {books.map((book) => (
            <div key={book.id}>
              <h2>{book.title}</h2>
            </div>
        ))}
      </div>
  );
};

export default App;



