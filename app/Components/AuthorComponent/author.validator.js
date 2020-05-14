const Joi = require('@hapi/joi');

const authorController = require('./author.controller');

exports.addAuthor = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        authorName: Joi.string().min(3).max(50).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        authorController.addAuthor(req, res);
    }
};

exports.updateAuthor = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        authorName: Joi.string().min(3).max(50).required(),
        authorId: Joi.number().integer().min(0).max(1000).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        authorController.updateAuthor(req, res);
    }
};

exports.deleteAuthor = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        authorId: Joi.number().integer().min(0).max(1000).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        authorController.deleteAuthor(req, res);
    }
};

exports.getAllAuthor = async function (req, res) {
    authorController.getAllAuthor(req, res);
};

exports.getAuthorAndBook = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        authorId: Joi.number().integer().min(0).max(1000).required()
    });
    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({error: error.details[0].message});
    } else {
        authorController.getAuthorAndBook(req, res);
    }
};
