const postsData = require('./../data/postsData');

module.exports = {
    getPosts() {
        return postsData.getPosts();
    }
};