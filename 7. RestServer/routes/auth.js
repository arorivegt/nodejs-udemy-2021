const { Router } = require('express');
const { body, check  } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth.controllers');
const { fieldValidator } = require('../middlewares/field-validator');

const router = Router();

router.post('/login',[
    body('email','Email is mandatory').isEmail(),
    body('password','password is mandatory').not().isEmpty(),
    fieldValidator
], login);

router.post('/google',[
    body('id_token','id_token is mandatory').not().isEmpty(),
    fieldValidator
], googleSignIn);


module.exports = router;