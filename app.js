const express = require('express');

const app = express();

const PORT = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.use(require('./routes/home'));
app.use('/auth', require('./routes/users'))

app.get('/create-post', (req, res) => {
    res.render('Create Post', {
        title: ".Blogger | Create Post",
        css: "Create Post.css"
    });
});

app.listen(PORT, (err) => {
    if (err) return console.error(err);
    console.log(`Server is listening at http:localhost:${PORT}`);
});