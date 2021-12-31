const fieldjwt = require('../middlewares/field-jwt');
const fieldvalidator = require('../middlewares/field-validator');
const validaterole = require('../middlewares/validate-role');

module.exports = {
    ...fieldvalidator,
    ...fieldjwt,
    ...validaterole
}