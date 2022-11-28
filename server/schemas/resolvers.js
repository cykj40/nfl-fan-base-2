const { AuthenticationError } = require('apollo-server-express');  
const { User } = require('../models');
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

    }
};


module.exports = resolvers;