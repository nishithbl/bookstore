import React, { useState, useEffect } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ListGroup>
      {books.map(book => (
        <ListGroup.Item key={book._id}>
          {book.title} by {book.author}
          <Button variant="primary" onClick={() => console.log(book)}>View Details</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default BookList;