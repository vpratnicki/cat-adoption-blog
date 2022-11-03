const User = require('./User');
const Cat = require('./Cat');

// create associations
User.hasMany(Cat, {
    foreignKey: 'user_id'
});

Cat.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Cat };