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
        enum: ['ADMIN', 'USER']
    },
    status: {
        type: Boolean,
        default: true
    },
    authGoogle: {
        type: Boolean,
        default: false
    }
})


module.exports = model( 'User', SchemaUser );