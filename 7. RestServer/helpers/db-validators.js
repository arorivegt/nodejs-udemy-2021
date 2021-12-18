const Role = require('../models/role');
const User = require('../models/user');

const isValidRol = async ( rol = '') => {
    const existRol = await Role.findOne( { rol });
    if ( !existRol ){
            throw new Error(`rol => ${ rol } doesn't exist`)
    }
}

const existEmail = async ( email = '' ) => {

    // validate if email exist
    const isExist = await User.findOne({ email });

    if( isExist ){
        throw new Error(`The email => ${ email } is in use`)
    }
}

module.exports = {
    isValidRol,
    existEmail
}