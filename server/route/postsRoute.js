const express = require('express');
const router = express.Router();
const postsService = require('./../service/postsService');


router.get('/posts', async function (req, res) {
    res.json(await postsService.getPosts());
});

router.get('/posts/:id', async function (req, res) {

});

router.post('/posts', async function (req, res) {

});

router.put('/posts/:id', async function (req, res) {

});

router.delete('/posts/:id', async function (req, res) {

});

module.exports = router;

