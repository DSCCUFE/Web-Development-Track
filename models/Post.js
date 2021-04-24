const mongoose = require('mongoose');
const moment = require('moment');

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    postTitle: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: moment().format('LLL')
    },
});

module.exports = mongoose.model("Post", postSchema);