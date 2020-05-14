const express = require('express');
const router = express.Router();
const bookValidator = require('../app/Components/BookComponent/book.validator');

// Add Book - (body: [bookName,authorId]) - (bookName,authorId is required)
router.post('/addBook', bookValidator.addBook);

// Update Book - (body: [bookName,bookId]) - (bookName,bookId is required)
router.put('/updateBook', bookValidator.updateBook);

// Delete Book - (body: [bookId]) - (bookId is required)
router.delete('/deleteBook', bookValidator.deleteBook);

// Get All Book and Author
router.get('/getAllBook', bookValidator.getAllBook);

// Get Book and Author - (body: [bookId]) - (bookId is required)
router.post('/getBookAndAuthor', bookValidator.getBookAndAuthor);

module.exports = router;
