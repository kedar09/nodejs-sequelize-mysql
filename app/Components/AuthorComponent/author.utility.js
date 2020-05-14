const {Author, Book} = require('../../../config/database');

exports.updateAuthor = function (req, res) {
    Author.update({authorName: req.body.authorName},
        {where: {authorId: req.body.authorId}}
    )
        .then((result) => {
            res.status(200).send({message: 'Author updated successfully!'});
        }).catch(error => {
        console.log(error);
        res.status(200).send({message: 'Author not updated!'});
    });
};

exports.deleteAuthor = function (req, res) {
    Author.destroy({
        where: {authorId: req.body.authorId}
    }).then(() => {
        res.status(200).send({message: 'Author deleted successfully!'});
    }).catch(error => {
        console.log(error);
        res.status(200).send({message: 'Author not deleted!'});
    });
};

exports.getAuthor = function (req, res) {
    Author.findOne({
        where: {
            authorId: req.body.authorId
        }
    }).then(result => {
        res.status(200).send({result});
    });
};

exports.getAuthorAndBook = function (req, res) {
    Author.findAll({
        include: [{
            model: Book,
            where: {authorId: req.body.authorId}
        }]
    }).then(result => {
        res.status(200).send({result});
    });
};
