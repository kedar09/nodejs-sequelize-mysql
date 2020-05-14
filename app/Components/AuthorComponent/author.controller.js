const authorUtility = require('./author.utility');

const {Author, Book} = require('../../../config/database');

exports.addAuthor = function (req, res) {
    Author.create(req.body)
        .then((result) => {
            res.status(200).send({message: 'Author saved successfully!'});
        }).catch(error => {
        console.log(error);
        res.status(200).send({message: 'Author not saved!'});
    });
};

exports.updateAuthor = function (req, res) {
    Author.count({
        where: {
            authorId: req.body.authorId
        }
    }).then(result => {
        if (result === 0) {
            res.status(200).send({message: 'Author not found'});
        } else {
            authorUtility.updateAuthor(req, res);
        }
    });
};

exports.deleteAuthor = function (req, res) {
    Author.count({
        where: {
            authorId: req.body.authorId
        }
    }).then(result => {
        if (result === 0) {
            res.status(200).send({message: 'Author not found'});
        } else {
            authorUtility.deleteAuthor(req, res);
        }
    });
};

exports.getAllAuthor = function (req, res) {
    Author.findAll({
        include: [{
            model: Book,
        }]
    }).then(result => {
        res.status(200).send({result});
    });
};

exports.getAuthorAndBook = function (req, res) {
    Author.count({
        where: {
            authorId: req.body.authorId
        }
    }).then(result => {
        if (result === 0) {
            res.status(200).send({message: 'Author not found'});
        } else {
            authorUtility.getAuthorAndBook(req, res);
        }
    });
};

