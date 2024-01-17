const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  type: {
    type: String,
    enum: ['LIKE', 'LOVE', 'LAUGH', 'WOW', 'SAD', 'ANGRY'],
    required: true,
  },
});

const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction;