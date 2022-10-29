'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    Book.init({
        authorId: DataTypes.INTEGER,
        noOfPages: DataTypes.INTEGER,
        dateOfPublishing: DataTypes.DATE,
        illustrator: DataTypes.STRING,
        gerne: DataTypes.STRING,
        publisher: DataTypes.STRING,
        img: DataTypes.STRING,
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Book',
    })
    return Book
}