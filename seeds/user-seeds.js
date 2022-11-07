const { User } = require('../models');

const userData = [
    {
        username: 'Eric',
		email: 'eric@gmail.com',
		password: 'hdyiijloju678'
    },
    {
        username: 'Adam',
		email: 'adam@gmail.com',
		password: 'jjjijijifjf8f'
    },
    {
        username: 'Mel',
		email: 'mel@yahoo.com',
		password: 'huuyf5eew'
    },
    {
        username: 'Nala',
		email: 'nala@yahoo.com',
		password: 'jiuhygt678'
    },
    {
        username: 'Charles',
		email: 'charles@icloud.com',
		password: 'yiijloju678'
    },
    {
        username: 'DawnMarie',
        email: 'dawn@gmail.com',
        password: 'dawn',
        isAdmin: true
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;