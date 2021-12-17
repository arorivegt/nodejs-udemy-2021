const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
    rol:{
        type : String,
        require: [true, 'rol is mandatory']
    }

});

module.exports = model( 'Rol', RoleSchema );