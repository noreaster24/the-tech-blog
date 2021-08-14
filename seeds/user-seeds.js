const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'LedTasso',
        email: 'ledtasso@gmail.com',
        password: 'password1233'
    },
    {
        username: 'TedLasso',
        email: 'tedlasso@gmail.com',
        password: 'password1233'
    },
    {
        username: 'RoyKent',
        email: 'roykent@gmail.com',
        password: 'password1233'
    },
    {
        username: 'SamObiyana',
        email: 'samobi@gmail.com',
        password: 'password1233'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;