const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        dropDups: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    info: {
        type: String,
        required: false,
        trim: true,
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;