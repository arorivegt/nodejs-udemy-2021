const { validationResult } = require('express-validator');

//I need to add next, because it's alright I need to continue and next give me that 
const fieldValidator = ( req, res, next ) => {
    const errors = validationResult(req);

    if( !errors.isEmpty() ){
        return res.status(400).json(errors)
    }

    next();
}

module.exports = {
    fieldValidator
}