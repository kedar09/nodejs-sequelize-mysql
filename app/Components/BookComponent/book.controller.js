const bookUtility = require('./book.utility');

const {Book, Author} = require('../../../config/database');

exports.addBook = function (req, res) {
    Book.create(req.body)
        .then((result) => {
            res.status(200).send({message: 'Book saved successfully!'});
        }).catch(error => {
        console.log(error);
        res.status(200).send({message: 'Book not saved!'});
    });
};

exports.updateBook = function (req, res) {
    Book.count({
        where: {
            bookId: req.body.bookId
        }
    }).then(result => {
        if (result === 0) {
            res.status(200).send({message: 'Book not found'});
        } else {
            bookUtility.updateBook(req, res);
        }
    });
};

exports.deleteBook = function (req, res) {
    Book.count({
        where: {
            bookId: req.body.bookId
        }
    }).then(result => {
        if (result === 0) {
            res.status(200).send({message: 'Book not found'});
        } else {
            bookUtility.deleteBook(req, res);
        }
    });
};

exports.getAllBook = function (req, res) {
    Book.findAll({
        include: [{
            model: Author,
        }]
    }).then(result => {
        res.status(200).send({result});
    });
};

exports.getBookAndAuthor = function (req, res) {
    Author.count({
        where: {
            authorId: req.body.authorId
        }
    }).then(result => {
        if (result === 0) {
            res.status(204).send({message: 'Author not found'});
        } else {
            authorUtility.getBookAndAuthor(req, res);
        }
    });
};

