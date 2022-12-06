const { AuthenticationError } = require('apollo-server-express');  
const { User } = require('../models');
const { Comment } = require('../models');
const { signToken } = require('../utils/auth');
const { stripe } = require("stripe")("sk_test_51M84yrECDt5IVbjpPu5NGY0GdUyStAqMJVjDu8s06GutnfhWWMGBwwYKAGLnGVbCFTqAm3FGYBF4k3rbV1EenvJY00oh9Ac4K5");


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        
        users: async () => {
            return User.find().populate('comments');
        },
          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('comments');
        },
          comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comment.find(params).sort({ createdAt: -1 });
        },
          comment: async (parent, { commentId }) => {
            return Comment.findOne({ _id: commentId });
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addComment: async (parent, { commentText }, context) => {
            if (context.user) {
              const comment = await Comment.create({
                commentText,
                commentAuthor: context.user.username,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { comments: comment._id } }
              );
      
              return comment;
            }
            throw new AuthenticationError('You need to be logged in!');
          },
          removeComment: async (parent, { commentId }, context) => {
            if (context.user) {
              const comment = await Comment.findOneAndDelete({
                _id: commentId,
                commentAuthor: context.user.username,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { comments: comment._id } }
              );
      
              return comment;
            }
            throw new AuthenticationError('You need to be logged in!');
          },
       

    }
};


module.exports = resolvers;