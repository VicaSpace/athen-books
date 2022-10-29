'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    Author.init({
        name: DataTypes.STRING,
        bornOn: DataTypes.DATE,
        spouce: DataTypes.STRING,
        children: DataTypes.INTEGER,
        bornIn: DataTypes.STRING,
        img: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Author',
    })
    return Author
}