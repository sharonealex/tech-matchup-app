const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/techmatchup');

module.exports = mongoose.connection;