const database = require('../infra/database');

module.exports = {
    getPosts() {
        return database.query('SELECT * FROM Blog.Posts');
    }
};