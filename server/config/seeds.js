const db = require('./connection');
const { User, Comment } = require('../models');

db.once('open', async () => {
    const comment1 = await Comment.create({
        commentText: 'Mike White looks like the real deal',
        createdAt: '',
        commentAuthor: 'User100'
    })

   const comment2 = await Comment.create({
        commentText: 'Trevor Lawrence finally showed why he was the #1 pick.',
        createdAt: '',
        commentAuthor: 'User100'
    })

    const comment3 = await Comment.create({
         commentText: 'Dang Cardinals ruined my bet.',
         createdAt: '',
         commentAuthor: 'User102'
    })

    const comment4 = await Comment.create({
         commentText: 'I always knew the Giants were frauds. They wont win another game this year.',
         createdAt: '',
         commentAuthor: 'User103'
     })

    const comment5 = await Comment.create({
         commentText: 'NFC is so wide open. I wonder whos going to win the conference.',
         createdAt: '',
         commentAuthor: 'User104'
     })

     const comment6 = await Comment.create({
         commentText: 'I wonder how truly healthy Josh Allen is. Bills wont win anything without him.',
         createdAt: '',
         commentAuthor: 'User105'
     })

    const comment7 = await Comment.create({
         commentText: 'Man Pat Mahomes is a baaaaaad man.',
         createdAt: '',
         commentAuthor: 'User106'
     })


    await User.create({
        username: 'user100',
        email: 'user100@gmail.com',
        password: 'password1',
        comments: [comment1, comment2]
    });

     await User.create({
         username: 'user102',
         email: 'user101@gmail.com',
         password: 'password2',
         comments: [comment3]
     });

     await User.create({
         username: 'user103',
         email: 'user102@gmail.com',
         password: 'password3',
         comments: [comment4]
     })

    

     await User.create({
         username: 'user104',
         email: 'user104@gmail.com',
         password: 'password5',
         comments: [comment5]
        })

     await User.create({
         username: 'user105',
         email: 'user105@gmail.com',
         password: 'password6',
         comments: [comment6]
     })

     await User.create({
         username: 'user106',
         email: 'user106@gmail.com',
         password: 'password6',
            comments: [comment7]
     })
     
  process.exit();
});