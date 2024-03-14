const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 65,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now,
        required: true
    }
    
})

const UserInfo = mongoose.model('user_information', UserInfoSchema);
module.exports = UserInfo;