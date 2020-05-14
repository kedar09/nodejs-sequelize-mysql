const express = require('express');
const router = express.Router();
const authorValidator = require('../app/Components/AuthorComponent/author.validator');

// Add Author - (body: [authorName]) - (authorName is required)
router.post('/addAuthor', authorValidator.addAuthor);

// Update Author - (body: [authorName, authorId]) - (authorName,authorId is required)
router.put('/updateAuthor', authorValidator.updateAuthor);

// Delete Author - (body: [authorId]) - (authorId is required)
router.delete('/deleteAuthor', authorValidator.deleteAuthor);

// Get All Author 
router.get('/getAllAuthor', authorValidator.getAllAuthor);

// Get Author and Book - (body: [authorId]) - (authorId is required)
router.post('/getAuthorAndBook', authorValidator.getAuthorAndBook);

module.exports = router;
