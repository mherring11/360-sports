 const mongoose = require('mongoose');

// create database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/360-sports', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// require readout of submitted queries and results in the terminal
mongoose.set('debug', true);

module.exports = mongoose.connection;