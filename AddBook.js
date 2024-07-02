import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/books', { title, author })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Book
      </Button>
    </Form>
  );
}

export default AddBook;