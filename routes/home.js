const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('Home', {
        title: ".Blogger",
        css: "Home.css",
        js: "Home.js"
    });
});

module.exports = router;