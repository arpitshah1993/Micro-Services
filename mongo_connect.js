var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var conn = mongoose.createConnection("mongodb://localhost:27017");

module.exports = exports = conn;