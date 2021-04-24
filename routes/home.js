const router = require('express').Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({}).sort({ createdAt: 1 });
        res.render('Home', {
            title: ".Blogger",
            css: "Home.css",
            js: "Home.js",
            posts
        });
    } catch (err) {
        console.error(err);
        return res.send("Error");
    }
});

module.exports = router;