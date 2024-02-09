const mongoose = require('mongoose');
let contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String
});

module.exports = mongoose.model('users', contactSchema);