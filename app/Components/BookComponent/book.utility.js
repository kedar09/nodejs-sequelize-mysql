const {Book, Author} = require('../../../config/database');

exports.updateBook = function (req, res) {
    Book.update({
        bookName: req.body.bookName //,
        // authorId: req.body.authorId
    }, {
        where: {bookId: req.body.bookId}
    }).then((result) => {
        res.status(200).send({message: 'Book updated successfully!'});
    }).catch(error => {
        console.log(error);
        res.status(204).send({message: 'Book not updated!'});
    });
};

exports.deleteBook = function (req, res) {
    Book.destroy({
        where: {bookId: req.body.bookId}
    }).then(() => {
        res.status(200).send({message: 'Book deleted successfully!'});
    }).catch(error => {
        console.log(error);
        res.status(204).send({message: 'Book not deleted!'});
    });

};

exports.getBookAndAuthor = function (req, res) {
    Book.findAll({
        include: [{
            model: Author,
            where: {authorId: req.body.authorId}
        }]
    }).then(result => {
        res.status(200).send({result});
    });
};
