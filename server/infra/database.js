const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'Blog'
});

module.exports = db;
