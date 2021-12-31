const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = ( req, res = response, next ) => {

    const token = req.header("token");
    if ( !token ) {
        return res.status(401).json({
            msg: 'There\'s not a valid token'
        })
    }

    try {
        //With this I can verify is this is a valid token
        const { uid } = jwt.verify( token , process.env.SECRETPRIVATEKEY );
        console.log(uid);
        req.uid = uid;
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