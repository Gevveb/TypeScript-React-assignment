const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName: {type: String, require: [true, 'please entert a first name']},
    lastName: {type: String, require: [true, 'please entert a last name']},
    email: {type: String, require: [true, 'please entert an email address'], unique: true},
    password: {type: String, require: [true, 'please entert a first name']}
})

module.exports = mongoose.model("users", userSchema)