const { Schema, model } = require('mongoose');

const SchemaUser = Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The password is required']
    },
    image: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },
    status: {
        type: Boolean,
        default: true
    },
    authGoogle: {
        type: Boolean,
        default: false
    }
});

//I can rewrite a specific methods
SchemaUser.methods.toJSON = function() {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}



module.exports = model( 'User', SchemaUser );