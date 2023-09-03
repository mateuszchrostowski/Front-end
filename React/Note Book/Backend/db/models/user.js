const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = mongoose.Schema(
    {        
        nickname: {
            type: String,
            required: true,
            unique: true          
        },
        password: {
            type: String,
            required: true
        }
    },
    { collection: 'users' }
);



const User = mongoose.model('User', UserSchema);

module.exports = User;