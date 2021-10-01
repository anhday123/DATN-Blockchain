const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: String,
    name: String,
    phone: Number,
    password: String
})

module.exports = mongoose.model('nguoidung',userSchema)