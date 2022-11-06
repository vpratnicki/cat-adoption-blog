const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create Cat model
class Cat extends Model {}

// create fields/columns for Cat model
Cat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        personality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //e.g. Available, pending adoption, adopted 
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        image_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              isURL: true
            }
        },    
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        cat_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'comment',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'cat'
    }
);

module.exports = Cat;


// uncomment below then copy/paste to test in insomnia
// { 
// "name": "Lynx",
// "age": "3 months",
// "description": "Lorem ipsum ...",
// "personality": "Kind and loving",
// "status": "available",
// "user_id": 1	
// }