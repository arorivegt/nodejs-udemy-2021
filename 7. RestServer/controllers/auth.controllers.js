const { response } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { createJWT } = require('../helpers/create-jwt');

const login = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne( { email });

        if (!user){
            return res.status(400).json({
                msj: 'User or password is not correct'
            })
        }

        if ( !user.status ){
            return res.status(400).json({
                msj: 'User is disable'
            })
        }

        const validatePassword = bcryptjs.compareSync( password, user.password );
        if (!validatePassword){
            return res.status(400).json({
                msj: 'User or password is not correct - pass'
            })
        }

        //Generate JWT
        const token = await createJWT( user.id );

        res.json({
            user,
            token
        })
    } catch ( err ) {
        console.log( err );
        return res.json({
            msg: 'Communicate with your administrator'
        })
    }
}

module.exports = {
    login
}