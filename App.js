import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const bookId = '123';
  return (
    <div className="App">
      <BookDetails bookId={bookId} />
    <Container fluid>
      <Row>
        <Col md={8}>
          <BookList />
        </Col>
        <Col md={4}>
          <AddBook />
        </Col>
      </Row>
      <Row>
        <Col>
          <BookDetails />
        </Col>
      </Row>
    </Container>
    
    </div>
  );
}

export default App;