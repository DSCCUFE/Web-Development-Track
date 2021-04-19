const router = require('express').Router();

router.get('/signin', (req, res) => {
    res.render('Sign In', {
        title: ".Blogger | Sign In",
        css: "Sign In.css"
    });
});

router.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (username === '' || password === '') {
        return res.send("Error: You must enter your username and password");
    }
    res.render('Sign In', {
        title: ".Blogger | Sign In",
        css: "Sign In.css"
    });
});

router.get('/signup', (req, res) => {
    res.render('Sign Up', {
        title: ".Blogger | Sign Up",
        css: "Sign Up.css"
    });
});

router.post('/signup', (req, res) => {
    console.log(req.body);
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.send("Error: passwords don't match");
    }
    res.redirect('/');
});

module.exports = router;