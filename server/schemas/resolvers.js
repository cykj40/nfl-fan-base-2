// ... Existing imports
const { Post } = require('../models'); // Import your Post model
const { Reaction } = require('../models'); // Import your Reaction model

const resolvers = {
  // ... Existing resolvers

  Query: {
    // ... Existing query resolvers
    posts: async (parent, args) => {
      return Post.find().populate('author').populate({
        path: 'comments',
        populate: { path: 'commentAuthor' } // Populate comment authors
      });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId }).populate('author').populate('comments.commentAuthor');
    },
  },

  Mutation: {
    // ... Existing mutation resolvers
    createPost: async (parent, { content }, context) => {
      if (context.user) {
        const post = await Post.create({
          author: context.user._id,
          content,
          timestamp: new Date(),
        });
        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { postId, reactionType }, context) => {
      if (context.user) {
        const existingReaction = await Reaction.findOne({
          user: context.user._id,
          post: postId,
        });

        if (existingReaction) {
          if (existingReaction.type === reactionType) {
            await Reaction.findOneAndDelete({ _id: existingReaction._id }); // Remove existing reaction
          } else {
            await Reaction.findOneAndUpdate({ _id: existingReaction._id }, { type: reactionType }); // Update reaction type
          }
        } else {
          await Reaction.create({
            user: context.user._id,
            post: postId,
            type: reactionType,
          });
        }

        const post = await Post.findOne({ _id: postId }).populate('reactions.user'); // Get updated post with reactions
        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;