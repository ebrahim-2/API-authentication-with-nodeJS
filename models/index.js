const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true});

module.exports.Users = require('./Users');