const { AuthenticationError } = require('apollo-server-express');  
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { stripe } = require("stripe")("sk_test_51M84yrECDt5IVbjpPu5NGY0GdUyStAqMJVjDu8s06GutnfhWWMGBwwYKAGLnGVbCFTqAm3FGYBF4k3rbV1EenvJY00oh9Ac4K5");

// start here
// const resolvers = {
//     Query: {