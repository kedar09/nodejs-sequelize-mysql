const Joi = require('@hapi/joi');

const bookController = require('./book.controller');

exports.addBook = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        bookName: Joi.string().min(1).max(50).required(),
        authorId: Joi.number().integer().min(0).max(1000).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        bookController.addBook(req, res);
    }
};

exports.updateBook = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        bookName: Joi.string().min(1).max(50).required(),
        bookId: Joi.number().integer().min(0).max(1000).required(),
        authorId: Joi.number().integer().min(0).max(1000)
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        bookController.updateBook(req, res);
    }
};

exports.deleteBook = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        bookId: Joi.number().integer().min(0).max(1000).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        bookController.deleteBook(req, res);
    }
};

exports.getAllBook = async function (req, res) {
    bookController.getAllBook(req, res);
};

exports.getBookAndAuthor = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        bookId: Joi.number().integer().min(0).max(1000).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        authorController.getBookAndAuthor(req, res);
    }
};
