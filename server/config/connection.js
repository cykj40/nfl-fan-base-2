const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nfl-fan-base', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;