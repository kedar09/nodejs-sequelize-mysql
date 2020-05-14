const Sequelize = require('sequelize');
const AuthorModel = require('../app/Models/Author/author.model');
const BookModel = require('../app/Models/Book/book.model');

let sequelize = new Sequelize('sequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

const Author = AuthorModel(sequelize, Sequelize)

const Book = BookModel(sequelize, Sequelize)

Author.hasMany(Book, {foreignKey: 'authorId', sourceKey: 'authorId'});

Book.belongsTo(Author, {foreignKey: 'authorId', sourceKey: 'authorId'});

sequelize.sync()
    .then(() => {
        console.log(`Database & tables created here!`)
    });

module.exports = {Author, Book};

