module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('Book', {
    bookId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bookName: {
        type: Sequelize.STRING,
        unique: true
    },
    authorId: {
        type: Sequelize.INTEGER
    }
  },{
        tableName: 'book',
        timestamps: true
  });
  return Book;
}
