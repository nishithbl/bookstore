const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send('Error retrieving books');
  }
};

exports.addBook = async (req, res) => {
  const { title, author } = req.body;
  const newBook = new Book({ title, author });

  try {
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (err) {
    res.status(400).send('Error saving book');
  }
};