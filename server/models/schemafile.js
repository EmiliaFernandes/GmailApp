var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var saveSchema   = new Schema({
    From: String,
    Subject: String,
    date:  String
});

module.exports = mongoose.model('myemails', saveSchema);
