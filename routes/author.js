var express = require('express');
var router = express.Router();
var authorValidator = require('../app/Components/AuthorComponent/author.validator');

// Login user - (body: [email,password]) - (email,password is required)
router.post('/addAuthor', authorValidator.addAuthor);

// Login user - (body: [email,password]) - (email,password is required)
router.put('/updateAuthor', authorValidator.updateAuthor);

// Login user - (body: [email,password]) - (email,password is required)
router.delete('/deleteAuthor', authorValidator.deleteAuthor);

// register new user - (body: [email,password,displayName,phoneNumber]) - (email,password is required)
router.post('/getAuthor', authorValidator.getAuthor);

router.post('/getAuthorAndBook', authorValidator.getAuthorAndBook);

module.exports = router;
