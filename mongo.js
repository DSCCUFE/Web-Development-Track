const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect('mongodb://localhost/Blogger', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        // we're connected!
        console.log("Connected to DB");
    });
}

module.exports = connectToDB;