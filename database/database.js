const Sequelize = require('sequelize');

const db = 'blog';
const user = 'root';
const password = '';
const host = '127.0.0.1';

const connection = new Sequelize(db, user, password, {
    host: host,
    dialect: 'mysql'
});

module.exports = connection;