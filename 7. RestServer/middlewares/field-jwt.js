const { response } = require("express");
const jwt = require("jsonwebtoken");
const User = require('../models/user')

const validateJWT = async ( req, res = response, next ) => {

    const token = req.header("token");
    if ( !token ) {
        return res.status(401).json({
            msg: 'There\'s not a valid token'
        })
    }

    try {
        //With this I can verify is this is a valid token
        const { uid } = jwt.verify( token , process.env.SECRETPRIVATEKEY );

        const user = await User.findById( uid );

        if (!user ){
            return res.status(401).json({
                msg: 'User is not valid'
            })
        }

        //validate if the user is enable
        if( !user.status ){
            return res.status(401).json({
                msg: 'User is disable'
            })
        }
        req.user = user;

        next();
    } catch (err){
        return res.status(401).json({
            msg: 'There\'s not a valid token'
        })
    }
}

module.exports = {
    validateJWT
}