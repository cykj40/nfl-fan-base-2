const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    commentAuthor: {
        type: String,
        required: true
    },
           
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;