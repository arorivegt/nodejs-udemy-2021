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

const existUserByID = async ( id ) => {

    // validate if email exist
    const isExist = await User.findById(id);

    if( !isExist ){
        throw new Error(`The id => ${ id } doesn't exist`)
    }
}

module.exports = {
    isValidRol,
    existEmail,
    existUserByID
}