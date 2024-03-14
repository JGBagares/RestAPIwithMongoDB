const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserCredsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role_type: {
        type: String,
        required: true,
        enum: ["student", "admin"],
    },
    date_created: {
        type: Date,
        default: Date.now,
        required: true
    }
    
})

const UserCreds = mongoose.model('user_credentials', UserCredsSchema);
module.exports = UserCreds;