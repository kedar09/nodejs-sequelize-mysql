module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define('Author', {
    authorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    authorName: {
        type: Sequelize.STRING,
        unique: true
    }
  },{
        tableName: 'author',
        timestamps: true
  });
  return Author;
}
