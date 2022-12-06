const db = require('./connection');
const { User, Comment } = require('../models');

db.once('open', async () => {

    await User.create({
        username: 'user100',
        email: 'user100@gmail.com',
        password: 'password1',
    });

    await User.create({
        username: 'user101',
        email: 'user101@gmail.com',
        password: 'password2',
    });

    await User.create({
        username: 'user102',
        email: 'user102@gmail.com',
        password: 'password3',
    })

    await User.create({
        username: 'user103',
        email: 'user103@gmail.com',
        password: 'password4',
    })

    await User.create({
        username: 'user104',
        email: 'user104@gmail.com',
        password: 'password5',
    })

    await User.create({
        username: 'user105',
        email: 'user105@gmail.com',
        password: 'password6',
    })

    await User.create({
        username: 'user106',
        email: 'user106@gmail.com',
        password: 'password6',
    })

    await User.create({
        username: 'user107',
        email: 'user107@gmail.com',
        password: 'password7',
    })

    await User.create({
        username: 'user108',
        email: 'user108@gmail.com',
        password: 'password8',
    })

    await User.create({
        username: 'user109',
        email: 'user109@gmail.com',
        password: 'password9',
    })

    await User.create({
        username: 'user110',
        email: 'user110@gmail.com',
        password: 'password10',
    })

    await Comment.create({
        commentText: 'Mike White looks like the real deal',
        createdAt: '',
        commentAuthor: 'User100'
    })

    await Comment.create({
        commentText: 'Trevor Lawrence finally showed why he was the #1 pick.',
        createdAt: '',
        commentAuthor: 'User101'
    })

    await Comment.create({
        commentText: 'Dang Cardinals ruined my bet.',
        createdAt: '',
        commentAuthor: 'User102'
    })

    await Comment.create({
        commentText: 'I always knew the Giants were frauds. They wont win another game this year.',
        createdAt: '',
        commentAuthor: 'User103'
    })

    await Comment.create({
        commentText: 'NFC is so wide open. I wonder whos going to win the conference.',
        createdAt: '',
        commentAuthor: 'User104'
    })

    await Comment.create({
        commentText: 'I wonder how truly healthy Josh Allen is. Bills wont win anything without him.',
        createdAt: '',
        commentAuthor: 'User105'
    })

    await Comment.create({
        commentText: 'Man Pat Mahomes is a baaaaaad man.',
        createdAt: '',
        commentAuthor: 'User106'
    })

    await Comment.create({
        commentText: '49ers defense is lethal!!! Nick Bosa DPOY.',
        createdAt: '',
        commentAuthor: 'User107'
    })

    await Comment.create({
        commentText: 'Are the Packers cooked? Is this the end for them?',
        createdAt: '',
        commentAuthor: 'User108'
    })

    await Comment.create({
        commentText: 'Who would have thought Geno Smith would revive his career the way he has this season. Its remarkable.',
        createdAt: '',
        commentAuthor: 'User109'
    })

    await Comment.create({
        commentText: 'NFC South might be the worst division ive ever seen',
        createdAt: '',
        commentAuthor: 'User110'
    })



  process.exit();
});