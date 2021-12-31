const jwt = require('jsonwebtoken');

const createJWT = ( uid = '' ) => {
    
    return new Promise(  (resolve, reject) => {
        const payload = { uid };

        //I Need to send the payload that has the information on the session, the secretprivatejey to sign my tokens, and if
        //I want how long time the token have to expire
        jwt.sign( payload, process.env.SECRETPRIVATEKEY , {
            expiresIn: '4h'
        }, ( err, token ) => {
            if (err){
                console.log(err);
                reject("Token couldn't be created");
            }else{
                resolve( token );
            }
        })
    }) 
}

module.exports = {
    createJWT
}