var express = require('express');
var router = express.Router();
var bookValidator = require('../app/Components/BookComponent/book.validator');

// Login user - (body: [email,password]) - (email,password is required)
router.post('/addBook', bookValidator.addBook);

// Login user - (body: [email,password]) - (email,password is required)
router.put('/updateBook', bookValidator.updateBook);

// Login user - (body: [email,password]) - (email,password is required)
router.delete('/deleteBook', bookValidator.deleteBook);

// register new user - (body: [email,password,displayName,phoneNumber]) - (email,password is required)
router.post('/getBook', bookValidator.getBook);


// // get user profile - (body: [authId]) - (authId is required)
// router.post('/getUserProfile', userValidator.getUserProfileById);

// // update user password - (body: [authId,password]) - (authId,password is required)
// router.put('/updateUserPassword', userValidator.updateUserPassword);

// // update user profile - (body: [authId,displayName,phoneNumber]) - (authId,displayName or phoneNumber is required)
// router.put('/updateUserProfile', userValidator.updateUserProfile);

// // delete user account (body: [authId]) - (authId is required)
// router.delete('/deleteUserProfile', userValidator.deleteUserProfile);

module.exports = router;
