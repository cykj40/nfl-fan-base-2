const db = require('./connection');
const { User, Comment, Post, Reaction } = require('../models'); // Import new models

db.once('open', async () => {
  // Create sample posts with associated reactions and comments
  const post1 = await Post.create({
    author: 'user100',
    content: 'Here is my first blog post!',
  });
  await Reaction.create({ user: 'user102', post: post1._id, type: 'LIKE' });
  await Comment.create({ commentText: 'Great post!', commentAuthor: 'user103', post: post1._id });

  const post2 = await Post.create({
    author: 'user104',
    content: 'Sharing my thoughts on the latest tech trends.',
  });
  await Reaction.create({ user: 'user101', post: post2._id, type: 'WOW' });
  await Comment.create({ commentText: 'Interesting insights!', commentAuthor: 'user105', post: post2._id });

  // ... Create more sample posts, reactions, and comments as needed

  // Create users with associated comments and posts
  await User.create({
    username: 'user100',
    email: 'user100@gmail.com',
    password: 'password1',
    posts: [post1], // Add created posts to user
    comments: [/* ... */], // Add associated comments here
  });

  // ... Create other users with their associated posts and comments

  process.exit();
});