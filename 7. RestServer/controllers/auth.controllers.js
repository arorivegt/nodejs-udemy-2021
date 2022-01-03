const { response } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { createJWT } = require('../helpers/create-jwt');
const { googleVerify } = require('../helpers/google-verify-');

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

const googleSignIn = async(req, res = response) => {
    const { id_token } = req.body;
    
    console.log(id_token);
    try {
        const { name, email, picture} = await googleVerify(id_token)

        let user = await User.findOne( { email });
        //I need to create a user because it's not created
        if ( !user ){ 
            const data = {
                name,
                email,
                password: ':P',
                image: picture,
                authGoogle: true
            }
            user = new User(data);
            await user.save();
        }

        if( !user.status ){
            res.status(400).json({
                msg: 'Talk with your administrator, user is disable',
            })
        }


        const token = await createJWT( user.id );

        res.json({
            user,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Token can\'t be verified',
        })
    }
}

module.exports = {
    login,
    googleSignIn
}