const { response } = require("express");


const isAdmin = (req, res = response, next) => {
    //I get the user from the request from field-jwt-.js
    if ( ! req.user ){
        return res.status(500).json({
            msg: 'You need to validate the user'
        })
    }

    const { rol, name } = req.user;

    if ( rol !== 'ADMIN'){
        return res.status(401).json({
            msg: `${ name } is not administrator`
        })
    }

    next();
}

module.exports = {
    isAdmin
}