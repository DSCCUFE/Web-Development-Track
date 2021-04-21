const router = require('express').Router();

router.get('/create-post', (req, res) => {
    res.render('Create Post', {
        title: ".Blogger | Create Post",
        css: "Create Post.css"
    });
});

module.exports = router;