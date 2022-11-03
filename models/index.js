const User = require('./User');
const Cat = require('./Cat');
const Comment = require('./Comment');

// create associations
User.hasMany(Cat, {
    foreignKey: 'user_id'
});

Cat.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Cat, {
    foreignKey: 'cat_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Cat.hasMany(Comment, {
    foreignKey: 'cat_id'
});

module.exports = { User, Cat, Comment };