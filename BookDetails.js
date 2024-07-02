import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

const BookDetails = ({ bookId }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/api/books/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Card.Img variant="top" src={book.coverImage} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
        <Card.Text>{book.description}</Card.Text>
        <Button variant="primary">Check Out</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem><strong>ISBN:</strong> {book.isbn}</ListGroupItem>
        <ListGroupItem><strong>Publisher:</strong> {book.publisher}</ListGroupItem>
        <ListGroupItem><strong>Published Date:</strong> {book.publishedDate}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Row>
          <Col>
            <Button variant="info" onClick={() => console.log('Viewing book history')}>View History</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => console.log('Editing book details')}>Edit Details</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BookDetails;